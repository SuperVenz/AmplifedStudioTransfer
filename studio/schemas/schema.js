// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
// Premade Components
import contactForm from "./components/premade/contactForm";
import hero from "./components/premade/hero";
import section from "./components/premade/section";
// Pics
import pic from "./components/pics/pic";
import picArticle from "./components/pics/picArticle";
import picCaption from "./components/pics/picCaption";
// Text
import article from "./components/text/article";
import subArticle from "./components/text/subArticle";
// Ultility
import buttonOutbound from "./components/ultility/buttonOutbound";
import buttonPageLink from "./components/ultility/buttonPageLink";
import seo from "./components/ultility/seo";
import socialHandle from "./components/ultility/socialHandle";
// Custom Components
import gearCard from "./components/custom/gearCard";
import videoHeader from "./components/custom/videoHeader";
import serviceCard from "./components//custom/serviceCard";
import educate from "./components/custom/educate";
import highlightText from "./components/custom/highlightText";
import aboutCard from "./components/custom/aboutCard";
// Pages
import artistDevelopment from "./pages/artistDevelopment";
import headerFooter from "./pages/siteSettings/headerfooter";
import siteInfo from "./pages/siteSettings/siteInfo";
import widgets from "./pages/siteSettings/widgets";
import contact from "./pages/contact";
import index from "./pages/index";
import themes from "./pages/siteSettings/themes";
import videoLink from "./components/custom/videoLink";
import ampPosts from "./pages/ampPosts";
import gallery from "./pages/gallery";
import generalAmp from "./pages/generalAmp";
import generalServices from "./pages/generalServices";
import profilePage from "./pages/profilePage";
import rooms from "./pages/rooms";
import roomsPosts from "./pages/roomsPosts";
import servicePage from "./pages/servicePage";
import gearPage from "./pages/gearPage";
import about from "./pages/about";
import imageCollage from "./components/custom/imageCollage";
import roomCard from "./components/custom/roomCard";
import portablePic from "./components/custom/portablePic";
import mainPortable from "./components/ultility/mainPortable";
import youtubeHeader from "./components/ultility/youtubeHeader";
import soundCloud from "./components/ultility/soundCloud";
import portableLinks from "./components/custom/portableLinks";
import thankyou from "./pages/thankyou";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    pic,
    picArticle,
    picCaption,
    article,
    subArticle,
    buttonOutbound,
    buttonPageLink,
    seo,
    socialHandle,
    headerFooter,
    siteInfo,
    widgets,
    contact,
    index,
    contactForm,
    section,
    hero,
    themes,
    gearCard,
    videoHeader,
    serviceCard,
    educate,
    highlightText,
    aboutCard,
    videoLink,
    ampPosts,
    gallery,
    generalAmp,
    generalServices,
    profilePage,
    rooms,
    roomsPosts,
    artistDevelopment,
    servicePage,
    gearPage,
    about,
    imageCollage,
    roomCard,
    portablePic,
    portableLinks,
    mainPortable,
    youtubeHeader,
    soundCloud,
    thankyou,
  ]),
});
