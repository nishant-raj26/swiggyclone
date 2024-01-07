import React from "react";
import Image from "next/image";
// const resObj = {

//         "info": {
//           "id": "428",
//           "name": "Biryani Pot",
//           "cloudinaryImageId": "mdipoyzfzsa7n7igskht",
//           "locality": "Maruti Nagar",
//           "areaName": "Btm Layout",
//           "costForTwo": "₹500 for two",
//           "cuisines": [
//             "North Indian",
//             "Biryani"
//           ],
//           "avgRating": 4,
//           "parentId": "21798",
//           "avgRatingString": "4.0",
//           "totalRatingsString": "10K+",
//           "sla": {
//             "deliveryTime": 22,
//             "lastMileTravel": 2.4,
//             "serviceability": "SERVICEABLE",
//             "slaString": "22 mins",
//             "lastMileTravelString": "2.4 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-01-07 03:00:00",
//             "opened": true
//           },
//           "badges": {
//             "textExtendedBadges": [
//               {
//                 "iconId": "guiltfree/GF_Logo_android_3x",
//                 "shortDescription": "options available",
//                 "fontColor": "#7E808C"
//               }
//             ]
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "imageBased": {},
//               "textBased": {},
//               "textExtendedBadges": {
//                 "badgeObject": [
//                   {
//                     "attributes": {
//                       "description": "",
//                       "fontColor": "#7E808C",
//                       "iconId": "guiltfree/GF_Logo_android_3x",
//                       "shortDescription": "options available"
//                     }
//                   }
//                 ]
//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "30% OFF",
//             "subHeader": "UPTO ₹75"
//           },
//           "orderabilityCommunication": {
//             "title": {},
//             "subTitle": {},
//             "message": {},
//             "customIcon": {}
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {},
//               "video": {}
//             }
//           },
//           "reviewsSummary": {},
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {
//           "context": "seo-data-0789d8cd-b21c-493f-9cc4-fa0cda4171db"
//         },
//         "cta": {
//           "link": "https://www.swiggy.com/restaurants/biryani-pot-maruti-nagar-btm-layout-bangalore-428",
//           "text": "RESTAURANT_MENU",
//           "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"

// }
const IMG_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, id, costForTwo, avgRating, cuisines } =
    resData?.info;
  return (
    <div className="border w-60 h-auto text-center p-4 mt-4 mx-auto  rounded-3xl">
      <Image
        src={IMG_URL + cloudinaryImageId}
        alt="mainpic"
        width="500"
        height="500"
      />
      <h1 className="font-extrabold text-xl">{name} </h1>
      <h1>ID = {id}</h1>
      <h1> {costForTwo} </h1>
      <h1> id:{id} </h1>
      <h1> {cuisines.join(",  ")} </h1>
      <h1 className="font-extrabold text-red-900" > {avgRating} </h1>
    </div>
  );
};

export default RestaurantCard;
