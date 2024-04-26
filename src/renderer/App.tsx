import './App.css';

import { Link, MemoryRouter as Router, Route, Routes } from 'react-router-dom';

import icon from '../../assets/icon.svg';
import Test1Page from '../pages/test1';

// eslint-disable-next-line @typescript-eslint/naming-convention
function Hello(): JSX.Element {
    return (
        <>
            <div>
                <div className="Hello">
                    <img width="200" alt="icon" src={icon} />
                </div>
                <h1>z3 electron-react-boilerplate</h1>
                <div className="Hello">
                    <a href="https://electron-react-boilerplate.js.org/" target="_blank" rel="noReferrer">
                        <button type="button">
                            <span role="img" aria-label="books">
                                📚
                            </span>
                            Read our docs
                        </button>
                    </a>
                    <Link to="/test2">
                        <button type="button">
                            <span role="img" aria-label="folded hands">
                                🙏
                            </span>
                            Test1
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export function App(): JSX.Element {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Hello />} />
                <Route path="/test2" element={<Test1Page />} />
            </Routes>
        </Router>
    );
}
