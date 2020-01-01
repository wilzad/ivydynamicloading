
import { Routes } from '@angular/router';



export function Mobile(userAgent) {

    var isMobile = {
        Android: function () {
            return userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return userAgent.match(/BlackBerry/i);
        },
        IOS: function () {
            return userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return userAgent.match(/IEMobile/i) || userAgent.match(/WPDesktop/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.IOS() || isMobile.Opera() || isMobile.Windows());
        }
    }

    return isMobile.any();
}


export function getModule(agent): Routes {
    console.log('agent ', agent)
    let userAgent: string = agent;

    if (typeof navigator != "undefined") {
        userAgent = navigator.userAgent;
    }
    if (typeof userAgent == "undefined")
        userAgent = "";


    if (Mobile(userAgent)) {

        return mobileroutesB2C;
    }
    else {
        return deskroutesB2C;
    }

    //  return [] as Routes;
}




const mobileroutesB2C: Routes = [
    {
        path: '',
        // loadChildren: () => import('../../../modules/app.mobile.module').then(mod => mod.AppMobileModule)
        loadChildren: () => import('../modules/app.mobile.module').then(mod => mod.AppMobileModule)
    }
];

const deskroutesB2C: Routes = [
    {
        path: '',
        loadChildren: () => import('../modules/app.desktop.module').then(mod => mod.AppDesktopModule)
    }
];
