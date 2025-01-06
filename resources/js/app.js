import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import vuetify from './vuetify'; // Vuetify configuration
import './Pages/assets/main.css'; // Main CSS
import './Pages/assets/tailwind.css'; // Tailwind CSS
import "@fortawesome/fontawesome-free/css/all.css"; // Font Awesome styles
// Font Awesome configuration
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas, faBars, faGauge, faBagShopping, faMoneyCheckDollar, faWarehouse, faDesktop, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faYoutube, faWindows } from '@fortawesome/free-brands-svg-icons';
import { faClock, faCircleCheck, faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';

// Add icons to the library
library.add(
    fas,
    faUser,
    faFacebookF,
    faTwitter,
    faInstagram,
    faYoutube,
    faBars,
    faClock,
    faGauge,
    faBagShopping,
    faCircleCheck,
    faMoneyCheckDollar,
    faWarehouse,
    faDesktop,
    faWindows,
    faEnvelope,
    faSquarePlus
);

// Inertia setup
createInertiaApp({
    resolve: async name => {
        // Dynamically import all Vue components in the Pages folder (including subdirectories)
        const pages = import.meta.glob('./Pages/**/*.vue');
        
        // Resolve the imported component asynchronously
        const importPage = pages[`./Pages/${name}.vue`] || pages[`./Pages/${name.replace('.', '/')}.vue`];
        if (!importPage) {
            throw new Error(`Page not found: ${name}`);
        }
        return (await importPage()).default; // Return the default export of the component
    },
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) });
        app.component('font-awesome-icon', FontAwesomeIcon); // Register Font Awesome component
        app.use(plugin); // Inertia plugin
        app.use(vuetify); // Vuetify
        app.mount(el); // Mount to the root element
    },
});





