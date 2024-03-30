import facebookImg from "@/public/Images/facebook.svg";
import twitter from "@/public/Images/twitter.svg";
import youtube from "@/public/Images/youtube.svg";
import instagramImg from "@/public/Images/instagram.svg";

interface SNSItem {
  link: string;
  imgSource: string;
}

interface SNSData {
  facebook: SNSItem;
  twitter: SNSItem;
  youtube: SNSItem;
  instagram: SNSItem;
}

const SNS_DATA: SNSData = {
  facebook: {
    link: "https://www.facebook.com/",
    imgSource: facebookImg,
  },
  twitter: {
    link: "https://twitter.com/",
    imgSource: twitter,
  },
  youtube: {
    link: "https://www.youtube.com/",
    imgSource: youtube,
  },
  instagram: {
    link: "https://www.instagram.com/",
    imgSource: instagramImg,
  },
};

export default SNS_DATA;
