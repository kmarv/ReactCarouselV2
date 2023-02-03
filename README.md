# React Carousel App

This is a react caruosel app designed in react. it display information inform of a slide that will automatically switch depending on the time delay passed

## Usage

import the carousel component and 
pass values to the props (delay , children)

#### Example
```
import Carousel from "../Carousel"

const App ()=>{
    return(
        <div className="App">
            <Carousel childern={[1,2,3,4,5]} delay={1000}>
        </div>
    )
}

export default App

```
## Live demo

https://csb-thwd6t.netlify.app/
