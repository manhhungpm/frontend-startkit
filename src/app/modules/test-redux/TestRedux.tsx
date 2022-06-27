// export default function TestRedux(){
//     return (
//         <h1>
//             Vao file test redux
//         </h1>
//     )
// }

import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as test from '../test-redux/redux/TestReduxRedux'

const TestRedux: React.FC = () => {
    const dispatch = useDispatch()
    const counter = useSelector((state:any) => state.test.strOutput)
    const [input, setInput] = useState('');

    return (
        <div>
            <h1>String: {counter}</h1>
            <input value={input} onInput={(e:any) => setInput(e.target.value)}/>
            <button className="default" onClick={() => dispatch(test.actions.add(input))}>Add event</button>
            <button className="default" onClick={() => dispatch(test.actions.sub(input))}>Sub event</button>
        </div>
    )
}

export default TestRedux