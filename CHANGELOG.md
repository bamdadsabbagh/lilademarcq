## [1.26.1](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.26.0...v1.26.1) (2022-05-01)


### Bug Fixes

* **ImageFeatures:** Check for link existence just before rendering ([2b8484f](https://github.com/bamdadsabbagh/lilademarcq/commit/2b8484f13d4890c23bfbaf6266abe93ba4fdabc7))

# [1.26.0](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.25.1...v1.26.0) (2022-05-01)


### Features

* Add arrows and optional center callback to ImagePointer + Add seamless and static modes to TriangleComponent ([2708cf9](https://github.com/bamdadsabbagh/lilademarcq/commit/2708cf91ac2de9a2f29160f5291f468dc81ea7a1))
* Add basic autoplay to Carousel and Hero + Better usePreloadImages hook ([a000202](https://github.com/bamdadsabbagh/lilademarcq/commit/a0002022058502e8133784c267c74a27c27ec4c5))
* Add dynamic data to Hero + Improve ImageFeatures, Carousel hooks ([301015a](https://github.com/bamdadsabbagh/lilademarcq/commit/301015a82da72c9a8ba7b91440c205c65b65fb86))


### Performance Improvements

* **usePreloadImages:** Move hook ([28ff59d](https://github.com/bamdadsabbagh/lilademarcq/commit/28ff59db2e015e3c6d9bd48c812b43229b06a2f8))

## [1.25.1](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.25.0...v1.25.1) (2022-05-01)


### Bug Fixes

* Ignore photoswipe images for transitions ([8287bdb](https://github.com/bamdadsabbagh/lilademarcq/commit/8287bdbe34151fccbca6002b0341d366e6cf1e40))

# [1.25.0](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.24.0...v1.25.0) (2022-05-01)


### Bug Fixes

* **ImageFeatures:** Make global font bigger on `isBig` prop ([71c3b0b](https://github.com/bamdadsabbagh/lilademarcq/commit/71c3b0bde36d5a252efb5e707ffc8cdc7755a40a))
* **Styles:** Remove header bottom margin ([3def9ce](https://github.com/bamdadsabbagh/lilademarcq/commit/3def9ce421149aeb0b142f0384a58e9865abf518))


### Features

* **Form:** Add validation and builder utility functions ([8ea0bdd](https://github.com/bamdadsabbagh/lilademarcq/commit/8ea0bddbb1548d3e4f67d837a7515014f45727db))
* **Form:** Replace mailgun with sendinblue + Add dynamic target from back office ([d3d1697](https://github.com/bamdadsabbagh/lilademarcq/commit/d3d1697f79507d0c4b4490060194df36f8fe39f5))
* **ImagePointer:** Add hook to manage clicks within the component ([46083cb](https://github.com/bamdadsabbagh/lilademarcq/commit/46083cbcdc7f3c8a0ee621faa837ad795a0c9fe5))
* **ImagePointer:** Extract to new component for further re-use ([2d6c63e](https://github.com/bamdadsabbagh/lilademarcq/commit/2d6c63ecb3c242f4b9c093068519b4f12b049ba2))
* **ImagePointer:** Use divs instead of pseudo-elements ([768cd3e](https://github.com/bamdadsabbagh/lilademarcq/commit/768cd3e7b0e742795b15550c3837db701f18d688))


### Performance Improvements

* **Video:** Use dynamic import to prevent `react-player` SSR ([7a79214](https://github.com/bamdadsabbagh/lilademarcq/commit/7a79214f4e017130d5557610f7a0e01d9f0e4e1b))

# [1.24.0](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.23.0...v1.24.0) (2022-05-01)


### Bug Fixes

* **Form:** Accept 302 response ([605168c](https://github.com/bamdadsabbagh/lilademarcq/commit/605168c1b339b3e6fc2a6ead93316abb342ba94b))


### Features

* **Form:** Add reCAPTCHA v3 verification ([ddc19ff](https://github.com/bamdadsabbagh/lilademarcq/commit/ddc19ff865c49c4896029564f2c3d5c2eca85eeb))
* **Form:** Submit client side ([7c60b8a](https://github.com/bamdadsabbagh/lilademarcq/commit/7c60b8ad5b7459b499c3d850b0c9acbfdbd5be8f))
* **Form:** Use mailgun with server request ([5f24ae6](https://github.com/bamdadsabbagh/lilademarcq/commit/5f24ae60952e2f86ce80151d0d38702d68b5c5ca))

# [1.23.0](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.22.5...v1.23.0) (2022-04-30)


### Features

* Add favicon ([92f1300](https://github.com/bamdadsabbagh/lilademarcq/commit/92f13006a6aa0c93aa69a0a5db60811142d9b99d))
* **Images:** Add transitions for all images ([0cc64d1](https://github.com/bamdadsabbagh/lilademarcq/commit/0cc64d1d3dacd4eba7a2f13798d38573ad5e9d1b))
* Work on HeroComponent + Improve global styling ([dda9b64](https://github.com/bamdadsabbagh/lilademarcq/commit/dda9b648468ac2829b5898c2dc5c108aee65b141))

## [1.22.5](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.22.4...v1.22.5) (2022-04-30)


### Bug Fixes

* **ObjectPage:** Purge children when slug changes ([e33eace](https://github.com/bamdadsabbagh/lilademarcq/commit/e33eace0fdc4736fd51958fc8c19682bb96a353e))

## [1.22.4](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.22.3...v1.22.4) (2022-04-30)


### Bug Fixes

* Drill props for FormComponent + Prevent `react-player` from rendering on the server side ([dce4f5f](https://github.com/bamdadsabbagh/lilademarcq/commit/dce4f5f8325f9c993bdaa7f3faae7ddd00eb5931))
* **Logo:** Add aria name ([93bdf7f](https://github.com/bamdadsabbagh/lilademarcq/commit/93bdf7fa457159aa8d8e00de9d572f931f0a7611))
* **Object:** Make container a div ([7a0e5c7](https://github.com/bamdadsabbagh/lilademarcq/commit/7a0e5c73cf9d01ae42d8b39464ac6fc163170ede))


### Performance Improvements

* **Carousel:** Preload adjacent images ([7d6662a](https://github.com/bamdadsabbagh/lilademarcq/commit/7d6662a6b7c5216640747c302229380625b1e61c))
* **ObjectPage:** Remove now unused `useEffect` ([4f6ad58](https://github.com/bamdadsabbagh/lilademarcq/commit/4f6ad5848549a38c6129cbefcda410b2f53d0031))
* Remove all fade animations ([d89925d](https://github.com/bamdadsabbagh/lilademarcq/commit/d89925d7654f797b63cf6c62123ae8e0ff1f7c1a))

## [1.22.3](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.22.2...v1.22.3) (2022-04-30)


### Performance Improvements

* Add image blurs to other components ([98230e4](https://github.com/bamdadsabbagh/lilademarcq/commit/98230e42db86b5dd55d2677ae71b4c061a6f2ea2))

## [1.22.2](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.22.1...v1.22.2) (2022-04-30)


### Performance Improvements

* Add default menu state to populate afterwards to speed up first draw + Remove image priorities ([2bd8692](https://github.com/bamdadsabbagh/lilademarcq/commit/2bd869236ab9d86301734f7aab295483866b80cc))
* **APropos:** Remove unnecessary code ([5b06c6b](https://github.com/bamdadsabbagh/lilademarcq/commit/5b06c6bc16d8ffb530c9c91c8bd50a525ae1353a))
* **ObjectModule:** Use breakpoints to improve rendering ([b69490a](https://github.com/bamdadsabbagh/lilademarcq/commit/b69490a095539aba73bee3688b73f467071a9cb6))

## [1.22.1](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.22.0...v1.22.1) (2022-04-30)


### Bug Fixes

* **API:** Set generic name for API handlers ([65af1f2](https://github.com/bamdadsabbagh/lilademarcq/commit/65af1f2d01a77de8ef75072257f32069c68ca3c6))
* **Burger:** Remove name collision between interface and object ([0d4b754](https://github.com/bamdadsabbagh/lilademarcq/commit/0d4b754a0978c0fdb208b26b1030fd7ed57d3704))
* **Images:** Fix badge rendering in GalleryComponent + Use base64 for ObjectsModule + Add better utility function names + Various fixes ([eae5fed](https://github.com/bamdadsabbagh/lilademarcq/commit/eae5fed145dbd0276fe4568605736874343e57ae))


### Performance Improvements

* **Images:** Fallback to WEBP format only ([91ae29c](https://github.com/bamdadsabbagh/lilademarcq/commit/91ae29c0a1aa326de507199e8aa5066b06bc36db))
* **Images:** Increase image resolution but lower q factor ([0d6120a](https://github.com/bamdadsabbagh/lilademarcq/commit/0d6120a2a883cbac6f595672dca67a2212f62de7))
* **Images:** Use inline base64 string instead of remote thumbnail ([869957c](https://github.com/bamdadsabbagh/lilademarcq/commit/869957c136030f6fefa0454116fa892f41e2f09b))
* Make form post request on server side + Add utility function to get API endpoints ([b4ada47](https://github.com/bamdadsabbagh/lilademarcq/commit/b4ada47d39133fdec9648122f9d5db5032385377))
* Remove dead code ([1a0a245](https://github.com/bamdadsabbagh/lilademarcq/commit/1a0a245e37e8cfb849ee2834f917b7981079bffa))

# [1.22.0](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.21.1...v1.22.0) (2022-04-29)


### Features

* Add privacy policy page + Update footer ([360f3ad](https://github.com/bamdadsabbagh/lilademarcq/commit/360f3adc09843cfecab0435688ae173f014a54b3))
* **Form:** Add form validation and submission ([2a66b4e](https://github.com/bamdadsabbagh/lilademarcq/commit/2a66b4e0b24dcc9efa8253115ca7bb89952280de))


### Performance Improvements

* **Images:** Increase slightly quality to 90 ([655644f](https://github.com/bamdadsabbagh/lilademarcq/commit/655644f834edc6c59000d4404ad29b4541167886))

## [1.21.1](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.21.0...v1.21.1) (2022-04-29)


### Bug Fixes

* **Section:** Do not fetch thumbnail if image is not defined ([468d2ea](https://github.com/bamdadsabbagh/lilademarcq/commit/468d2ea811b837c1589c6f1dd9326cec5d77ec41))

# [1.21.0](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.20.1...v1.21.0) (2022-04-29)


### Bug Fixes

* **Awards:** Improve styling ([595ae0d](https://github.com/bamdadsabbagh/lilademarcq/commit/595ae0d4c91c5f2bdf49f82688558eb4dec7254a))
* **Carousel:** Improve Dots styling ([c3b96a3](https://github.com/bamdadsabbagh/lilademarcq/commit/c3b96a350c99ed21a151be2147ed3f0cf3e76338))


### Features

* Get image blur data from remote server instead of local computation + Remove unused packages ([37ab93d](https://github.com/bamdadsabbagh/lilademarcq/commit/37ab93d58dd5c545ecea9d579df041e907a880c8))

## [1.20.1](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.20.0...v1.20.1) (2022-04-28)


### Bug Fixes

* Add new subdomain for remote images ([f449db8](https://github.com/bamdadsabbagh/lilademarcq/commit/f449db8bd25823792ea8c0dad465beb7f8a1ee80))

# [1.20.0](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.19.0...v1.20.0) (2022-04-28)


### Features

* **Images:** Generate blur base64 placeholders with `plaiceholder` for remote images + Improve carousel ([591c242](https://github.com/bamdadsabbagh/lilademarcq/commit/591c242e0ca787548e37a95bccccdddb10e46093))
* **Styling:** Streamline styles, breakpoints, grids and components ([ce40616](https://github.com/bamdadsabbagh/lilademarcq/commit/ce406168962ba6b96c80ea5941ece15e51aaedbe))

# [1.19.0](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.18.0...v1.19.0) (2022-04-28)


### Bug Fixes

* **AppLayout:** Simulate grid layout with flex ([43a8a68](https://github.com/bamdadsabbagh/lilademarcq/commit/43a8a682d2a411c93833cbed4ffa37f751e2fb75))


### Features

* **Header:** Better burger styling ([173fd90](https://github.com/bamdadsabbagh/lilademarcq/commit/173fd90482f59c2bb20c1a958e33a7644ef3dc9e))

# [1.18.0](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.17.1...v1.18.0) (2022-04-27)


### Features

* **Banner:** Improve styling ([c24ee40](https://github.com/bamdadsabbagh/lilademarcq/commit/c24ee407f73937cf20d8ab7cdeeceb5f732b3672))
* **Form:** Improve styling ([b5397cd](https://github.com/bamdadsabbagh/lilademarcq/commit/b5397cd56d0aa5a0f6474c9e20be0074d92b1eec))

## [1.17.1](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.17.0...v1.17.1) (2022-04-27)


### Bug Fixes

* **Gallery:** Improve badge positioning and size ([6e66c57](https://github.com/bamdadsabbagh/lilademarcq/commit/6e66c57105197bd0a32d391cf9e98839f4e9536c))

# [1.17.0](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.16.0...v1.17.0) (2022-04-27)


### Bug Fixes

* **Carousel:** Improve z-indexes and user-selects ([214e976](https://github.com/bamdadsabbagh/lilademarcq/commit/214e9765db4b1addbff1554c85a7dfb4aa12d412))
* **Header:** Set visibility to none when burger menu is not rendered + Improve styling code ([d91b94e](https://github.com/bamdadsabbagh/lilademarcq/commit/d91b94ec60a538437003bc0ba29df3cc461b1ecb))


### Features

* **Carousel:** Add optional floating badge ([6d40636](https://github.com/bamdadsabbagh/lilademarcq/commit/6d406365d86c251a5da87bc55ccc35b7983045d0))
* **ObjectLayout:** Add vimeo player ([49ecb88](https://github.com/bamdadsabbagh/lilademarcq/commit/49ecb88ae459be83a14f390e0e91dc2ea1dce5ec))

# [1.16.0](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.15.0...v1.16.0) (2022-04-27)


### Features

* **Header:** Rename component + Add correct semantics + Add mobile burger navigation ([cd0641c](https://github.com/bamdadsabbagh/lilademarcq/commit/cd0641c24f2a699a94f1d01ced396e1d1b4f6fe3))

# [1.15.0](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.14.6...v1.15.0) (2022-04-27)


### Bug Fixes

* **Breakpoints:** Rectify media query for below ([fe3c9b6](https://github.com/bamdadsabbagh/lilademarcq/commit/fe3c9b6917d905cb01a93dd1f2732f598507f25e))
* **SectionTitle:** Add optional padding left prop ([a1f07b3](https://github.com/bamdadsabbagh/lilademarcq/commit/a1f07b3359fcd588d83d74bb3618b4ee8e02255e))


### Features

* **ObjectsModule:** Rewrite grid with responsive ([5130d3b](https://github.com/bamdadsabbagh/lilademarcq/commit/5130d3ba728c76b41241a61657672b0e86126732))
* **Section:** Add below mobile width ([03d15ff](https://github.com/bamdadsabbagh/lilademarcq/commit/03d15ff5e2dbd6cef54e500c79dc42be7439e722))
* **ValuesModule:** Rewrite with responsive ([5122ab6](https://github.com/bamdadsabbagh/lilademarcq/commit/5122ab666312f42f471c1ed000160034857b9dcd))

## [1.14.6](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.14.5...v1.14.6) (2022-04-27)


### Bug Fixes

* **Layouts:** Move static components outside DefaultLayout ([2b16fed](https://github.com/bamdadsabbagh/lilademarcq/commit/2b16fedf496a12f7b81cc30917572fa05ec4ea62))

## [1.14.5](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.14.4...v1.14.5) (2022-04-27)


### Bug Fixes

* **Objects:** Redirect to `/404` if not found ([81a3dde](https://github.com/bamdadsabbagh/lilademarcq/commit/81a3ddec138ce7293aac50fc4bd77eb429b63881))

## [1.14.4](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.14.3...v1.14.4) (2022-04-27)


### Bug Fixes

* layouts ([d466aef](https://github.com/bamdadsabbagh/lilademarcq/commit/d466aefdb0aa5470b05e7399b864b84de2963ea9))

## [1.14.3](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.14.2...v1.14.3) (2022-04-27)


### Bug Fixes

* import ([eaba45d](https://github.com/bamdadsabbagh/lilademarcq/commit/eaba45ddd4f0f8e557ef55dce4837da24b39b794))

## [1.14.2](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.14.1...v1.14.2) (2022-04-27)


### Performance Improvements

* Provide full object name to SEO and Layout ([df7236f](https://github.com/bamdadsabbagh/lilademarcq/commit/df7236f49b5174e6653560fcb53d085ef83fcd1a))

## [1.14.1](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.14.0...v1.14.1) (2022-04-27)


### Bug Fixes

* **SEO:** Add default description ([97cf518](https://github.com/bamdadsabbagh/lilademarcq/commit/97cf5180f3775146a206147c13d1c0bc9db1bf2e))
* **SEO:** Render MetaComponent outside of layout ([6eeeb4a](https://github.com/bamdadsabbagh/lilademarcq/commit/6eeeb4a89b048b682d4af616c0800da669881923))

# [1.14.0](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.13.5...v1.14.0) (2022-04-27)


### Bug Fixes

* **Carousel:** Rectify calls to transition generator ([d472a0e](https://github.com/bamdadsabbagh/lilademarcq/commit/d472a0e0597c38615ede8968934a9bfcab9d076b))
* **Fonts:** Prevent font re-fetches and re-renders by `font-face` directive in built in global stylesheet ([eb05ddd](https://github.com/bamdadsabbagh/lilademarcq/commit/eb05dddfd7e102a8db4f8c6ea559ef8a97467851))
* Improve requested fields in requests' interfaces ([634e005](https://github.com/bamdadsabbagh/lilademarcq/commit/634e0055541a589beb0514d6674dc1b3d09b505f))
* Tune logo + animations ([fe3b958](https://github.com/bamdadsabbagh/lilademarcq/commit/fe3b958f08464fd57e5e35f0d3de5ce07830a0fa))


### Features

* **Carousel:** Add lightbox gallery + Create native image inspired by next/image + Remove old ModalComponent ([91c8efc](https://github.com/bamdadsabbagh/lilademarcq/commit/91c8efc01dd0bc3a5a2ae09b098130f12ae3b6a8))
* **ObjectLayout:** Improve title rendering + Bind to new server data ([4dbbbeb](https://github.com/bamdadsabbagh/lilademarcq/commit/4dbbbebf36487dba505d86135af9de5c9a1c81e3))
* **SEO:** Add meta descriptions + Add sitemap generator ([554d985](https://github.com/bamdadsabbagh/lilademarcq/commit/554d98555b1ab69b7394a9607c7d578b0dc8160e))


### Performance Improvements

* **Animations:** Move animation logic to their own blocks ([4d053b1](https://github.com/bamdadsabbagh/lilademarcq/commit/4d053b1110fc79201f1bba377cd43335b3f570ee))
* **AppLayout:** Ensure client data is ready before first render ([3110320](https://github.com/bamdadsabbagh/lilademarcq/commit/31103201f1b2bf40e24108adada785fa7ae26f10))

## [1.13.5](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.13.4...v1.13.5) (2022-04-26)


### Bug Fixes

* Recreate `ObjectLayout` to scope local state + Rename `isFirstDrawAtom` ([0b164cb](https://github.com/bamdadsabbagh/lilademarcq/commit/0b164cbe3173ca01231e54ff3e48c0efd667cb90))

## [1.13.4](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.13.3...v1.13.4) (2022-04-26)


### Bug Fixes

* Rename files + Provide absolute URL for client side fetches + Clean code ([4cd8d0a](https://github.com/bamdadsabbagh/lilademarcq/commit/4cd8d0a586337328567ca9615f80513348432909))
* **Stylings:** Better margins and paddings ([f7ef613](https://github.com/bamdadsabbagh/lilademarcq/commit/f7ef613971ea56b082443535739d7dd2f4482ba4))


### Performance Improvements

* **Deps:** Update to latest ([d18a97a](https://github.com/bamdadsabbagh/lilademarcq/commit/d18a97a09fdbb1585ad650d1b9c0b77293af3c35))

## [1.13.3](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.13.2...v1.13.3) (2022-04-26)


### Bug Fixes

* Improve layout and styling ([00adfa7](https://github.com/bamdadsabbagh/lilademarcq/commit/00adfa7ff33c5a33e2a8094f17b7a9aff20824c4))

## [1.13.2](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.13.1...v1.13.2) (2022-04-26)


### Bug Fixes

* **Awards:** Set key and rectify semantics ([b83c08e](https://github.com/bamdadsabbagh/lilademarcq/commit/b83c08ec6a4356f715146d1b801c745a0f1aef78))

## [1.13.1](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.13.0...v1.13.1) (2022-04-26)


### Bug Fixes

* **Nav:** Prevent overlapping of border for dropdown menus ([5b04901](https://github.com/bamdadsabbagh/lilademarcq/commit/5b04901e18c4a994507b6884f8507f3e8569995a))

# [1.13.0](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.12.0...v1.13.0) (2022-04-26)


### Bug Fixes

* **FormComponent:** Set back default state to not opened ([6e46232](https://github.com/bamdadsabbagh/lilademarcq/commit/6e4623255e55f459ec5935b72a8e0c0c810566f8))
* Use `gap` instead of `grid-gap` ([9cc32ba](https://github.com/bamdadsabbagh/lilademarcq/commit/9cc32ba41782d77d6a596fada098c7aefb5c05dd))


### Features

* **AwardsModule:** Rewrite body ([a32a9bf](https://github.com/bamdadsabbagh/lilademarcq/commit/a32a9bfe45eb549baf9a98317c924fc5eabf66ef))
* **ProductLayout:** Rewrite banner blocks ([4fe25dd](https://github.com/bamdadsabbagh/lilademarcq/commit/4fe25dd68d668270e753df22e8fdafa3ba9316db))
* Refactor NavigationComponent + Merge header logo into it + Add stickiness on scroll + Fix SocialButtonComponent ([3820417](https://github.com/bamdadsabbagh/lilademarcq/commit/3820417ebf80f57c72fbc6b85f9c7b749694e42f))

# [1.12.0](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.11.0...v1.12.0) (2022-04-23)


### Bug Fixes

* Remove testing code ([7afceb8](https://github.com/bamdadsabbagh/lilademarcq/commit/7afceb88313b2ae5e23adb68bb588cec86945b98))


### Features

* Fetch form initial data from CMS + Remove `axios` + Refactor fetcher functions ([c53fd22](https://github.com/bamdadsabbagh/lilademarcq/commit/c53fd2275620b49a3d5e965660dff2f23fc36cb9))


### Performance Improvements

* **Form:** Place `city` input in order for tab order + Split component hook code + Remove unused code ([859bd36](https://github.com/bamdadsabbagh/lilademarcq/commit/859bd367eef7aedcd786c36005c0f1ab00620ef0))
* **Nav:** Add navigation data to store + Fetch it earlier at `_app` level ([e3aa988](https://github.com/bamdadsabbagh/lilademarcq/commit/e3aa98847c8c6bbafbfd7053e7601dd14ef66f39))

# [1.11.0](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.10.2...v1.11.0) (2022-04-23)


### Features

* **Form:** Make subscribe button clickable from its description + More consistent submit button styling ([1c1add4](https://github.com/bamdadsabbagh/lilademarcq/commit/1c1add4968ae6b8aa3bdecb8853ea7c2b3da1dd1))

## [1.10.2](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.10.1...v1.10.2) (2022-04-23)


### Performance Improvements

* Add revalidation + Add fallbacks ([5a698c4](https://github.com/bamdadsabbagh/lilademarcq/commit/5a698c4405c2f7090d00cd7b7b330e786b1f6fda))

## [1.10.1](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.10.0...v1.10.1) (2022-04-22)


### Performance Improvements

* Use callbacks for image sources and sizes + Reduce image quality from 95 to default ([33ed6b0](https://github.com/bamdadsabbagh/lilademarcq/commit/33ed6b049237371ae74ad503c7aa6c2013a57913))

# [1.10.0](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.9.1...v1.10.0) (2022-04-22)


### Bug Fixes

* Set correct import paths ([2f585ad](https://github.com/bamdadsabbagh/lilademarcq/commit/2f585ad51b8dc99d87d9a07269278640d2c48e87))


### Features

* Move all static data to contentful CMS ([de4df54](https://github.com/bamdadsabbagh/lilademarcq/commit/de4df54ace80077ee198c347dda86a00a9438211))

## [1.9.1](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.9.0...v1.9.1) (2022-04-22)


### Bug Fixes

* **Next.js:** Remove `.next` folder before starting dev ([fb9963c](https://github.com/bamdadsabbagh/lilademarcq/commit/fb9963c9c571d9c3ebe7d7f4440aea2236d01fcb))
* **Utils:** Reduce expense of system file reading ([280de1b](https://github.com/bamdadsabbagh/lilademarcq/commit/280de1bab3c54c0b19e29d083207d4e3b0240d23))
* **Vercel:** Reverting not working workaround ([df99050](https://github.com/bamdadsabbagh/lilademarcq/commit/df9905017ef8141265079ccffd1abad94d07155d))
* **Vercel:** Testing workaround with vercel-cli ([9a89bda](https://github.com/bamdadsabbagh/lilademarcq/commit/9a89bda5384db8e5dfab6e2c4887b8dbd044ae24))


### Performance Improvements

* **AwardsModule:** Improve styling and hover effects ([ea2f5c0](https://github.com/bamdadsabbagh/lilademarcq/commit/ea2f5c0512ffe9d907826a17895cd6c46d961d4e))
* Set relative thumbnail folders and files + Misc improvements ([b339869](https://github.com/bamdadsabbagh/lilademarcq/commit/b339869517fb4ac48bf9713dbde5d970e3a296f8))
* **Utils:** Split code ([84ec256](https://github.com/bamdadsabbagh/lilademarcq/commit/84ec256e616ad98b0d30539c64eedef3036b7ace))

# [1.9.0](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.8.1...v1.9.0) (2022-04-21)


### Features

* **FormComponent:** Create layout ([e874968](https://github.com/bamdadsabbagh/lilademarcq/commit/e874968dfffd685a90c1d34dc8ab834844b0d295))

## [1.8.1](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.8.0...v1.8.1) (2022-04-21)


### Bug Fixes

* **ProductPage:** Watch `slug` instead of `name` to avoid collisions ([9d26ac5](https://github.com/bamdadsabbagh/lilademarcq/commit/9d26ac53a1eccebd3ba2533c5ed12077b7c777ae))

# [1.8.0](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.7.0...v1.8.0) (2022-04-21)


### Bug Fixes

* **CgvPage:** Set correct font weight ([b34e8f1](https://github.com/bamdadsabbagh/lilademarcq/commit/b34e8f19b078af21b86d036a2a029096fa9da7a2))
* **NavComponent:** Fetch routes at app layout level to prevent drawing anything before data retrieval ([d8db040](https://github.com/bamdadsabbagh/lilademarcq/commit/d8db0408346f50c09c6758be477f6a6c02778ebb))
* **NavComponent:** Rename Cell to Menu + Better cursor hovering style ([63185f1](https://github.com/bamdadsabbagh/lilademarcq/commit/63185f19ede3e0dd054d0be32c1127bdea0c707c))


### Features

* Add Carousel pointer layer + Add previous, next and zoom events + Add Modal + Various tweaks ([cfdca8b](https://github.com/bamdadsabbagh/lilademarcq/commit/cfdca8b83879ac3279f07d963ed8bab5ced95fe4))
* Better file structure for content management + Make routes dynamic with API + Various ([72ee7e8](https://github.com/bamdadsabbagh/lilademarcq/commit/72ee7e8aec63338cd9f4dc254df401a999fd3dc4))


### Performance Improvements

* **ModalComponent:** Split style and hook code ([f89b1c3](https://github.com/bamdadsabbagh/lilademarcq/commit/f89b1c38288c64828531be159e1fecb70a58f8a7))

# [1.7.0](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.6.0...v1.7.0) (2022-04-20)


### Bug Fixes

* **CarouselComponent:** Rectify decrement and increment functions + Better styling ([8e052ff](https://github.com/bamdadsabbagh/lilademarcq/commit/8e052ff8835678afbf0d910910553ffde4642905))
* **Fonts:** Add correct public path + SSR ([b787f0c](https://github.com/bamdadsabbagh/lilademarcq/commit/b787f0c19d2d5449f64f40cdd8fc3ec5c33d55bc))
* **ProductLayout:** Set arbitrary padding ([a3960c6](https://github.com/bamdadsabbagh/lilademarcq/commit/a3960c6ffe5eacd6632803ad94a37b02bb2af750))
* **SectionComponent:** Hide overflow ([9619fa0](https://github.com/bamdadsabbagh/lilademarcq/commit/9619fa00afb4cda28f2e983da61c5ebebe0b15de))
* **SectionTitle:** Remove media queries for now ([d5713eb](https://github.com/bamdadsabbagh/lilademarcq/commit/d5713eb6ef0a6fd152341bd74cc25b6247fff286))


### Features

* Add `CarouselComponent`, implement it to pages and use it for one product + Various improvements ([f809925](https://github.com/bamdadsabbagh/lilademarcq/commit/f809925db318887396a3960acd52ca9bdd4841d6))
* Add fonts ([e560c93](https://github.com/bamdadsabbagh/lilademarcq/commit/e560c93d6c772038e414804e70aaa084c5ce3830))
* **CarouselComponent:** Extract hook code to their own files ([ddbfa14](https://github.com/bamdadsabbagh/lilademarcq/commit/ddbfa14100dfa71fae1c1c1a80c4c751e7d2a9f0))


### Performance Improvements

* **AppLayout:** Extract hook code to their own file ([59395b5](https://github.com/bamdadsabbagh/lilademarcq/commit/59395b590283f277a0b20802570c9d573a1424a8))
* **CarouselComponent:** Extract hook code to their own files ([d7e5c44](https://github.com/bamdadsabbagh/lilademarcq/commit/d7e5c4468130e769adafb7a2531810c615f7678d))

# [1.6.0](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.5.1...v1.6.0) (2022-04-19)


### Bug Fixes

* **ContactComponent:** Prevent y overflow ([d0bebad](https://github.com/bamdadsabbagh/lilademarcq/commit/d0bebada6d5c52d5fe71914b00c094b3b7687fd4))


### Features

* Add products pages (WIP) + Various improvements ([4381bfb](https://github.com/bamdadsabbagh/lilademarcq/commit/4381bfb7e50830fd4860a48bd5147910f6d21183))


### Performance Improvements

* Extract styles code from react components ([e549d73](https://github.com/bamdadsabbagh/lilademarcq/commit/e549d7334bd3ea5bee7251678398626a664819a0))
* Extract text from `AwardsModule` to its markdown file + Move markdown files to `data` folder ([1b9f6e1](https://github.com/bamdadsabbagh/lilademarcq/commit/1b9f6e13e3c65307d2c149eb1fec91c29f8dadd4))
* Small improvements ([a3d13b4](https://github.com/bamdadsabbagh/lilademarcq/commit/a3d13b4b68749ee19dd898f21a34ce63ca7feb7e))

## [1.5.1](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.5.0...v1.5.1) (2022-04-18)


### Bug Fixes

* Replace single quotes with low quotes (apostrophes) ([3127840](https://github.com/bamdadsabbagh/lilademarcq/commit/3127840ec645ac7aef880c0fa16db23f4c52f6d0))

# [1.5.0](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.4.0...v1.5.0) (2022-04-18)


### Features

* **AwardsModule:** Add `awards` block ([358db26](https://github.com/bamdadsabbagh/lilademarcq/commit/358db26320027f16dc60dd6ab1176151f130097b))


### Performance Improvements

* Merge similar transitions to its own generator + Less verbose styled components ([3ad21f3](https://github.com/bamdadsabbagh/lilademarcq/commit/3ad21f3bcb670b797516dbef7b7fe773f92c8f09))
* **TriangleComponent:** Add hover styling + Add rotation transition + Clean code ([97b7538](https://github.com/bamdadsabbagh/lilademarcq/commit/97b753815e94a34220c00abeb83f12f0c805d1bd))

# [1.4.0](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.3.0...v1.4.0) (2022-04-18)


### Bug Fixes

* **ImageTextComponent:** Add better styling ([b84f374](https://github.com/bamdadsabbagh/lilademarcq/commit/b84f3743ec4b8a60b2d7de821d86656108756224))
* **Index:** Replace portrait image with new one ([d6058b1](https://github.com/bamdadsabbagh/lilademarcq/commit/d6058b17dce0e14e9fe6f6dd353f024e7b271cc5))
* **Nav:** Improve grid widths and gaps ([f84a973](https://github.com/bamdadsabbagh/lilademarcq/commit/f84a973b06dd53c34b2cec5a0c77d2897df64e0d))


### Features

* Add new ValuesModule with styles and assets + misc ([9f76c42](https://github.com/bamdadsabbagh/lilademarcq/commit/9f76c427ccbe62352b8e4a333044c5fb65ea04eb))


### Performance Improvements

* **ProductsModule:** Clean dead code ([1ec9402](https://github.com/bamdadsabbagh/lilademarcq/commit/1ec9402aa9f24f9ad1e3d0d599bfcc702adbde7c))

# [1.3.0](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.2.0...v1.3.0) (2022-04-17)


### Bug Fixes

* **Styles:** Tune paddings and widths + Work on next HeroComponent ([13187dd](https://github.com/bamdadsabbagh/lilademarcq/commit/13187ddbe1b681ff55e9fff883a5f398517d23e3))


### Features

* **Nav:** Set fixed size for correct border calculations + Set dynamic active colors ([f61c6b9](https://github.com/bamdadsabbagh/lilademarcq/commit/f61c6b9cf486ded192fe76191d9113e12ad3121e))


### Performance Improvements

* Better html semantics for header, nav and footer ([f19c928](https://github.com/bamdadsabbagh/lilademarcq/commit/f19c9287ae387b724537dbb881c31a10f854e526))

# [1.2.0](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.1.0...v1.2.0) (2022-04-16)


### Bug Fixes

* **MentionsLegales:** Add complete text for website identification + Add link for developer ([6f3d3b3](https://github.com/bamdadsabbagh/lilademarcq/commit/6f3d3b302154ac25bcc9aa3cec01c715de3e365f))


### Features

* Add `/a-propos` page + Add `/objets` page + Various improvements, updates, fixes ([cb23b47](https://github.com/bamdadsabbagh/lilademarcq/commit/cb23b47b2f795c8ce946e060daefc2cbc3adcf48))
* Add `/sa-poro` page + Add link to navigation menu + Remove dead code ([549b5da](https://github.com/bamdadsabbagh/lilademarcq/commit/549b5da810e16f1c222ca02d70bdb6b32f590404))

# [1.1.0](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.0.1...v1.1.0) (2022-04-15)


### Bug Fixes

* **ContactComponent:** Wrap the component to prevent overflow ([abb9769](https://github.com/bamdadsabbagh/lilademarcq/commit/abb9769d7e307dfddacd8b0c14be15fd64350bd1))


### Features

* **CGV:** Add CGV page + Add corresponding data as markdown + Update FooterComponent ([b1a9496](https://github.com/bamdadsabbagh/lilademarcq/commit/b1a94966f1ec3f297894048312c765cc2b8bac0f))
* **MarkdownComponent:** Add markdown component and utilities ([9c66be8](https://github.com/bamdadsabbagh/lilademarcq/commit/9c66be886d1559680b5aa0089d842c4a1e1ad044))
* **MentionsLegales:** Add MentionsLegales page + Add corresponding data as markdown + Update FooterComponent ([c514798](https://github.com/bamdadsabbagh/lilademarcq/commit/c514798a73be84e9955fd500123bb3a20a6715a5))

## [1.0.1](https://github.com/bamdadsabbagh/lilademarcq/compare/v1.0.0...v1.0.1) (2022-04-14)


### Performance Improvements

* Keep image handling in client side ([be6fe57](https://github.com/bamdadsabbagh/lilademarcq/commit/be6fe576d80327750a1dcaf602922d74b98f26ed))

# 1.0.0 (2022-04-14)


### Features

* First commit ([f975803](https://github.com/bamdadsabbagh/lilademarcq/commit/f9758038415d35b9d144e60771b54b2aee98a472))
