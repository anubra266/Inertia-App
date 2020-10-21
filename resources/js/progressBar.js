import { InertiaProgress } from "@inertiajs/progress";

/*
    TODO See getting variables from window.less
    TODO get the @{primary-color and mutate the progressBar object, insert it as color.
*/

const progressBar = {
    delay: 0,

    color: "#7971ea",

    includeCSS: true,

    showSpinner: true
};

//? progress bar for request loads
InertiaProgress.init(progressBar);

export const useProgressBar = () => {
    return true;
};
