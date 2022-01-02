import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome';
import {
  faSave,
  faUndo,
  faRedo,
  faExclamationCircle,
  faPlusCircle,
  faTimes,
  faTimesCircle,
  faChevronCircleDown,
  faAsterisk,
  faPlus,
  faSyncAlt,
  faBook,
  faArrowAltCircleDown,
  faArrowLeft,
  faCaretRight,
  faEdit,
  faCheck,
  faHome,
  faCommentAlt,
  faTools,
  faMinus,
  faSitemap,
  faPlusSquare,
  faMinusSquare,
  faQuestionCircle,
  faBars,
  faCodeBranch,
  faClone,
  faSignInAlt,
  faSearch,
  faServer,
  faHeart,
  faArrowCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faDiscord,
  faPatreon,
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faSave,
  faUndo,
  faRedo,
  faExclamationCircle,
  faPlusCircle,
  faTimes,
  faTimesCircle,
  faChevronCircleDown,
  faAsterisk,
  faPlus,
  faSyncAlt,
  faBook,
  faArrowAltCircleDown,
  faArrowLeft,
  faCaretRight,
  faEdit,
  faCheck,
  faHome,
  faCommentAlt,
  faTools,
  faMinus,
  faSitemap,
  faPlusSquare,
  faMinusSquare,
  faQuestionCircle,
  faBars,
  faCodeBranch,
  faClone,
  faSignInAlt,
  faSearch,
  faServer,
  faHeart,
  faArrowCircleRight,

  faGithub,
  faDiscord,
  faPatreon,
);

const FontAwesome = {
  install(Vue) {
    Vue.component('font-awesome', FontAwesomeIcon);
    Vue.component('font-awesome-layers', FontAwesomeLayers);
  },
};

export default FontAwesome;
