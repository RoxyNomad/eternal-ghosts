## name of the project
eternal-ghosts

## summary of the content
This webpage is an portfolio for the band Eternal Ghosts.
All news and media like: pictures, songs and videos are bundeled on this page.

## 🚀 Features
-news (news about the band)
-band (with members and biography button and band members, buttons are linked with pages)
-biography (with members and biography button and band biography, buttons are linked with pages)
-live (eventlist with upcoming and past shows)
-gallery (Locations are like folders with pictures on a seperated page)
-tour (with upcoming and past tour dates)
-releases (with infos about new releases from tracks or albums)
-media (new musicvideos or livevideos)
-links (links to other bands or company they supported the band)
-contact (conactform with submit button included an mailto function)

-terms (all terms as service is linked in the footer)
-privacy policy (the privacy policy is linked in the footer)

-admin (page fore band members to upload stuff)

## components, relations and parentpages
-global
						- Header and Footer, Header is the nav on top of every page and Footer is the copyright, terms as service and privacy policy,   at the end of the page, with the links to terms and policy
-news
						- NewsAnimation, is rendered after the Header and shows the fetched bandpicture and logo
						- PageBarBand, render the bar after the NewsAnimation with the ReadMore linked button inside
						- SocialIcons, show the icons in the bar and have the links implemented
						- ReadMore (coming in fututre), is rendered on second viewport and showing the fetched news
-band
						- SocialIcons, show the icons in the bar and have the links implemented
						- AnimatedBandMembers, if the button members are active, in this case ist the font of members button is red, then will the component render the fetched band members after the bar on page
-biography
						- RollInLogo, is on the biography page, if the biography button is active, in this case the font of biography button is red, then will the component, render the fetched rolled in logo after the Header
						- SocialIcons, show the icons in the bar and have the links implemented
						- Biography (coming in future), render the fetched band biography after the bar
-live
						- ZoomInLogo, rendering the fetched coming in logo after the header
						- SocialIcons, show the icons in the bar and have the links implemented
						- EventList, render the upcoming and the past events after the bar on page
-gallery
						- RollInLogo, rendering the fetched rolled in logo after the header
						- SocialIcons, show the icons in the bar and have the links implemented
						- GalleryLocations, render the fetched locations from the database and generate cards the are linked to a sperated page, where are show the fetched pictures, who are saved to the same location
						- GalleryGrid, is on the separated page and show the fetched pictures, from the chosen location
-tour
						- TourDates (coming in future), is rendered after the bar and show the fetched tour dates
						- RollInLogo, rendering the fetched rolled in logo after the header
						- SocialIcons, show the icons in the bar and have the links implemented
-releases
						- RollInLogo, rendering the fetched rolled in logo after the header
						- SocialIcons, show the icons in the bar and have the links implemented
						- Releases (coming in future), render the fetched releases after the bar on page
-media
						- ZoomOutLogo, rendering the fetched outgoing logo after the header
						- SocialIcons, show the icons in the bar and have the links implemented
						- Media (coming in future), render the fetched videolinks after the bar on page
-links
						- RollInLogo, rendering the fetched rolled in logo after the header
						- SocialIcons, show the icons in the bar and have the links implemented
						- Links (coming in future), render the fetched links from other bands or companies after the bar on page						
-contact
						- RollInLogo, rendering the fetched rolled in logo after the header
						- SocialIcons, show the icons in the bar and have the links implemented
						- ContactForm, render the form after the bar on page and ave an implemented submit with mailto function

-admin
						- MemberForm, show the fetched members from database, have the abillity to create or delete inserts from the band_members table on the database and upload the pictures to cloudinary with the implemented 'ImageUpload'
						- ImageUpload, upload the pictures to cloudinary
						- EventForm, show fetched events from database, have the abillity to create or delete inserts from events table on the database
						- LivePictureForm, have the abillity to upload pictures with 'ImageUpload', you can choose between two options (locations and live_pictures), cause the component 'LocationForm' is implemented. You can create inserts on the tables live_pictures and locations from the database, also.
						- LocationForm, gives the component 'LivePictureForm' the abillity for locations

## 🛠 Tech Stack

Next
TypeScript
Node (pnpm)
node_modules (next, react, react-dom, cloudinary, clsx, dotenv, framer-motion, node-pg-migrate, nodemailer, pg, sass)

## 📦 Installation

npm install
pnpm install

## ▶️ Usage

npx node-pg-migrate up to generate the tables on your database

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 🔐 Environment Variables

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

DATABASE_URL=

## 🌍 Deployment

eternal-ghosts.vercel.app to show the pgae that I published

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

