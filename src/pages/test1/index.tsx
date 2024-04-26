/* eslint-disable spellcheck/spell-checker */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Link } from 'react-router-dom';

interface ITest1PageState {
    str1: string;
}

interface ITest1PageProps {
    str1?: string;
}

export default class Test1Page extends React.Component<ITest1PageProps, ITest1PageState> {
    constructor(props: ITest1PageProps) {
        super(props);
        this.state = {
            str1: 'test11',
        };
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    render() {
        const { str1 } = this.state;
        return (
            // <div className="pageBg">
            <div>
                <Link to="/">
                    <button type="button">返回</button>
                </Link>
                <text>{str1}</text>
            </div>
        );
    }
}
