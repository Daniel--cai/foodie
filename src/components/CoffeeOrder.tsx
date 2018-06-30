import * as React from "react";
import CoffeeType from "./CoffeeType";

export default () => {
    return (<div className="section no-pad-bot">
        <div className="">
            <table className="table menu">
                <tbody>
                    <CoffeeType img="../assets/espresso.svg" type="Cappucino" description="sdfsdf" />
                    <CoffeeType img="../assets/espresso.svg" type="Cappucino" description="sdfsdf" />
                    <CoffeeType img="../assets/espresso.svg" type="Cappucino" description="sdfsdf" />
                </tbody>
            </table>
        </div>
    </div>
    )
}