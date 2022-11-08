import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import {Add} from '../views/Add'
import {List} from '../views/List'

export const Navigation = ()=>{

    return (
        <Routes>
            <Fragment>
                <Route path="/list" element={<List />}/>
                <Route path="/add" element={<Add />}/>
            </Fragment>
        </Routes>
    )
}