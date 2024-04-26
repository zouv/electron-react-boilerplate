/* eslint-disable spellcheck/spell-checker */
// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import type { IpcRendererEvent } from 'electron';
import { contextBridge, ipcRenderer } from 'electron';

export type Channels = 'ipc-example';

const electronHandler = {
    ipcRenderer: {
        sendMessage(channel: Channels, ...args: unknown[]): void {
            ipcRenderer.send(channel, ...args);
        },
        on(channel: Channels, func: (...args: unknown[]) => void): () => void {
            const subscription = (_event: IpcRendererEvent, ...args: unknown[]): void => {
                func(...args);
            };
            ipcRenderer.on(channel, subscription);

            return () => {
                ipcRenderer.removeListener(channel, subscription);
            };
        },
        once(channel: Channels, func: (...args: unknown[]) => void): void {
            ipcRenderer.once(channel, (_event, ...args) => {
                func(...args);
            });
        },
    },
};

contextBridge.exposeInMainWorld('electron', electronHandler);

export type ElectronHandler = typeof electronHandler;
