import {Component} from "react"
import { ErrorRefresh } from "../Constants/TextConstants"

class ErrorBoundary extends Component {
    state = {hasError: false}

    static getDerivedStateFromError(error){
        return {hasError: true }
    }

    componentDidCatch(error, info){
        console.log(error, info)
    }

    render() {
        if(this.state.hasError){
            return <div>{ErrorRefresh}</div>
        }
        return this.props.children
    }
}

export default ErrorBoundary