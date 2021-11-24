import {useState} from "react"

export const useDocumentTitle = (title) => {

    function setTitle(value){
        document.title = value;
        return value
    }

    return [setTitle(title), setTitle]
}