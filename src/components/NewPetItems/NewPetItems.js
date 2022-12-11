import NewPetItemsSummary from "./NewPetItemsSummary";
import AvailableNewPetItems from "./AvailableNewPetItems";
import { Fragment } from "react";

const NewPetItems = () => {
    return (
    <Fragment>
        <NewPetItemsSummary/>
        <AvailableNewPetItems/>
    </Fragment>);

};

export default NewPetItems;