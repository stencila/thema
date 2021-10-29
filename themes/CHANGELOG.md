# [2.25.0](https://github.com/stencila/thema/compare/v2.24.4...v2.25.0) (2021-10-29)


### Bug Fixes

* **Article editor:** Add extra test for valid items ([c188226](https://github.com/stencila/thema/commit/c18822667f2d40fb2f39894a856985278bbed73b))
* **Article editor:** Add tranformations for node types ([44ec0ae](https://github.com/stencila/thema/commit/44ec0aebe84a17f1fe7cd3076de49e701dff5514))
* **Article editor:** Fix order attribute for ordered lists ([adf52cb](https://github.com/stencila/thema/commit/adf52cb507ee091bf07fe42f1650ed5fed87413e))
* **Article editor:** Include ProseMirror editor styles ([8db95bc](https://github.com/stencila/thema/commit/8db95bc93a2f05a24fce51527740e0e8713e83f4))
* **Binaries:** Do not clear `REQUIRES` map to avoid deadlock ([d317c08](https://github.com/stencila/thema/commit/d317c08a700cc00afe0632ff3389e9f97a270b5a))
* **Binaries:** Set permissions in cross OS way ([5b69333](https://github.com/stencila/thema/commit/5b69333b87541a4d425a1ffab07deb4280e671ca))
* **Block patches:** Add fields for heading ([a5ccc74](https://github.com/stencila/thema/commit/a5ccc74c86c6710edcbeb70d0dc36ffeb005de3f))
* **Build:** Fix loading of manifest.json in production builds ([69a0bcd](https://github.com/stencila/thema/commit/69a0bcd22b4776eb168c9b6e3c88a62418d31cc0))
* **CLI:** Add banner warning about alpha state ([c66663a](https://github.com/stencila/thema/commit/c66663ab046205b0db8b24e292dc2101729ccc62))
* **CLI:** Consistent ordering and color for help ([71f4cd3](https://github.com/stencila/thema/commit/71f4cd3e10ea45be6366a3eab30324963e4f126e))
* **CLI:** Do not should env var section on errors ([a3eb92d](https://github.com/stencila/thema/commit/a3eb92d41aee10d328420edb3031cdb999cf6ccd))
* **CLI:** Improve presentation of interactive help ([e442ead](https://github.com/stencila/thema/commit/e442ead69e3f44764921bdc0f32d6549fc81445e))
* **CLI:** Make log output more compact ([49b5589](https://github.com/stencila/thema/commit/49b55892a76c31ba337fe2645b567a03324e7d09)), closes [#892](https://github.com/stencila/thema/issues/892)
* **CLI:** Only run upgrade thread if not explicitly upgrading ([4ba156d](https://github.com/stencila/thema/commit/4ba156d20e49597037661862007a900a46dd5035))
* **CLI:** Print errors ([0f1253c](https://github.com/stencila/thema/commit/0f1253c0ada95d1e8530b49093c0aa8963c5f152))
* **CLI:** Refinements to command descriptions and options ([0c2540f](https://github.com/stencila/thema/commit/0c2540f56bbfd2a2d33ce45e6dbfa1d2ba73940c))
* **Config:** Add logs directory to dirs command ([28dc7c4](https://github.com/stencila/thema/commit/28dc7c4299e6c1eb4068b0da160e47e19804af81))
* **Config:** Handle global options ([882d456](https://github.com/stencila/thema/commit/882d456af904ba998ff72657a4d85f1ff782c39c))
* **dependencies:** pin dependencies ([ed7891a](https://github.com/stencila/thema/commit/ed7891a03d3382e893db665f81c95d9e3b5166ab))
* **dependencies:** update dependency @stencila/encoda to ^0.97.3 ([285e573](https://github.com/stencila/thema/commit/285e573da2e04a6f67b33e302429eb1fdaf4e43d))
* **dependencies:** update dependency @stencila/encoda to ^0.98.5 ([b206f67](https://github.com/stencila/thema/commit/b206f6768e86a4b068a537cfdb7262d5f8aa756d))
* **dependencies:** update dependency @stencila/encoda to ^0.98.6 ([8c6709c](https://github.com/stencila/thema/commit/8c6709c0cfd8b9e30651d83cbf0077e82e722a47))
* **dependencies:** update dependency @stencila/encoda to v0.104.5 ([24016c0](https://github.com/stencila/thema/commit/24016c06246000c35ce86b664dda50084e60743c))
* **dependencies:** update dependency @stencila/logga to v3 ([8fe1f98](https://github.com/stencila/thema/commit/8fe1f98939e01a48d0b7174438d9cd9a2f695608))
* **dependencies:** update dependency tar to ^6.0.5 ([5b7a39d](https://github.com/stencila/thema/commit/5b7a39d6fb3160e3785adb1614ae4e281562c679))
* **dependencies:** update dependency tar to v6.1.0 ([9fd0153](https://github.com/stencila/thema/commit/9fd01534d96ad9d47acad2783ecbda73e79f8d58))
* **dependencies:** update dependency yargs to v16 ([29c7c7e](https://github.com/stencila/thema/commit/29c7c7e96451c6c83aa635812f1f2b0a25c9d940))
* **dependencies:** update rust crate anyhow to 1.0.38 ([2d9e5fb](https://github.com/stencila/thema/commit/2d9e5fb44080c7e84223bb6d6f567681e31a54fe))
* **dependencies:** update rust crate env_logger to 0.8.3 ([e019917](https://github.com/stencila/thema/commit/e019917fdfbe7807a6189f03e3ab3eb9eca0697a))
* **dependencies:** update rust crate futures to 0.3.13 ([1e21537](https://github.com/stencila/thema/commit/1e2153704742aa984eb6433f5a4230f92957932f))
* **dependencies:** update rust crate once_cell to 1.6.0 ([f4e5163](https://github.com/stencila/thema/commit/f4e51637ff8775eacdc55d61884fda25886dc331))
* **dependencies:** update rust crate once_cell to 1.7.2 ([a1ba977](https://github.com/stencila/thema/commit/a1ba977f6218f2b288e48c489eb6bc96d07ddce3))
* **dependencies:** update rust crate reqwest to 0.11.1 ([328d50c](https://github.com/stencila/thema/commit/328d50c71babe07f95473e6c0f6d8848896f9aa1))
* **dependencies:** update rust crate self_update to 0.25.0 ([2b21114](https://github.com/stencila/thema/commit/2b21114c2c532715b4409450e8f26960d05f9bdd))
* **dependencies:** update rust crate serde_json to 1.0.64 ([2e44fee](https://github.com/stencila/thema/commit/2e44fee35dd55e6ecffb19112942c247b8705d72))
* **dependencies:** update rust crate thiserror to 1.0.24 ([0cf99e8](https://github.com/stencila/thema/commit/0cf99e8447eff64d4d8687619a785187fa8ed5e6))
* **dependencies:** update rust crate tracing to 0.1.25 ([a57f933](https://github.com/stencila/thema/commit/a57f933eb8e91369763ed2681ed1ce8b7717977c))
* **dependencies:** update rust crate url to 2.2.1 ([cc19037](https://github.com/stencila/thema/commit/cc1903772e83a55f6ddb54d67c2452cf1c22bf9b))
* **Dependencies:** Update deps to latest versions ([6eff527](https://github.com/stencila/thema/commit/6eff527c9cc1ee7127eeeee8ccd579e5297504ff))
* **Deps:** Add strum_macros ([505d1e9](https://github.com/stencila/thema/commit/505d1e9033de94ed4463e68344c54fb573aeeb11))
* **Deps:** Cargo audit fix ([1aca400](https://github.com/stencila/thema/commit/1aca40075415e41c1a1c21ea12d2ed59de13d3d3))
* **Deps:** Remove opn ([6b5bb49](https://github.com/stencila/thema/commit/6b5bb499cb715c288335f0944a3171917268ead3))
* **Deps:** Update Encoda and yargs ([980c0bd](https://github.com/stencila/thema/commit/980c0bda997dc912b4b5b222c7ca4c5c3ea29363))
* **Deps:** Update tokio, warp etc ([0bbc1e4](https://github.com/stencila/thema/commit/0bbc1e48300d1c3ab14694005d1eee851c90e62a))
* **Docs:** Fix generation of help documentation ([f10aeb4](https://github.com/stencila/thema/commit/f10aeb46556fd89b4c4997a27c6fcbeae1a0c7ec))
* **Docs:** Fix Intercom doc link generation ([5f8cda6](https://github.com/stencila/thema/commit/5f8cda61a97198ff9839770bf5c822c3b4838111))
* **Docs:** Fix related articles section generation ([6cad5c3](https://github.com/stencila/thema/commit/6cad5c326a44daca135d0f724f3d00cf4017c0ab))
* **Docs:** Fix relative links in documentation ([72b3a66](https://github.com/stencila/thema/commit/72b3a66a2cce9bc27d9700b18f6febe2f1071b38))
* **Docs:** Skip schema coercion as it loses necessary meta data ([67a01c7](https://github.com/stencila/thema/commit/67a01c7879988669b41e6db1053aac7dfab51b50))
* **Release:** Avoid sed which differs on MacOS ([7377b13](https://github.com/stencila/thema/commit/7377b13ea287a9e668fdd738ab772f68c9a1657a))
* **Release:** Drop use of upload label which was causing issues for Windows ([8ac528c](https://github.com/stencila/thema/commit/8ac528cc9b87808576a564ce100214d82a00d3f3))
* **Release:** Update version in top level package ([4ef4ea8](https://github.com/stencila/thema/commit/4ef4ea8b512f9beb4ac27506a5df41d60dad0953))
* Update Encoda to 0.78.2 ([4a6c3fa](https://github.com/stencila/thema/commit/4a6c3faa416973498429008fd6fd11afee6411e4))
* Update Encoda to 0.80.0 ([072f340](https://github.com/stencila/thema/commit/072f3405d843e722cd066be8fc42d9d8c08aebb7))
* Update packages using `npm audit fix` ([81a9dcc](https://github.com/stencila/thema/commit/81a9dcc98d9124b148a710c801b651d68090a9e1))
* Updated to encoda 0.77.1 for relative zip dir fixes ([9ab97bd](https://github.com/stencila/thema/commit/9ab97bd97db3a6143aa6adb4a124029cc6dc2939))
* Updated to encoda 0.78.0 ([1a3b2bc](https://github.com/stencila/thema/commit/1a3b2bc1bd9c37346f7d7146d26db8435f3316c6))
* Updated to encoda 0.80.1 ([02518d1](https://github.com/stencila/thema/commit/02518d156d9c34c3c75cf77ceff6a660df91c0e7))
* **Build:** Fix the compression and extraction of dependencies ([2bc5085](https://github.com/stencila/thema/commit/2bc5085be90f94fcb841303d6a85213c37647119))
* **Build:** Statically link lzma-sys crate ([9a54d70](https://github.com/stencila/thema/commit/9a54d7043078ab2750b97582e32cbd3b871e15cb))
* **CI:** Do no skip CI on tag to trigger new release ([530365f](https://github.com/stencila/thema/commit/530365fc20d176716942f06c994a4bd18440ef8f))
* **CLI:** Add global error handler ([fef2000](https://github.com/stencila/thema/commit/fef2000e980b851421f270fee8b9a4ff502ad122))
* **CLI:** Add interactive as an alias ([5420cc7](https://github.com/stencila/thema/commit/5420cc70c2902579ccdf7ca8dc9ece111f05db4c))
* **CLI:** Always enter interactive mode when option is supplied ([5b0bf7e](https://github.com/stencila/thema/commit/5b0bf7e04fdf308299b180408789093958c81a4f))
* **CLI:** Change arrow directions for interactive mode command prefix ([da93388](https://github.com/stencila/thema/commit/da9338840ed1ad1c02212c9f097619e68dd0cb35))
* **CLI:** Do not highlight content when using non-TTY devices ([dfc40dd](https://github.com/stencila/thema/commit/dfc40ddba6a3de0fc23a88395ae4c3ea722c7283))
* **CLI:** Don't show projects in traces ([3ab04c6](https://github.com/stencila/thema/commit/3ab04c689c6263f07679a87ee56660cc258ea13f))
* **CLI:** Enable ANSII support on Windows ([9b076e9](https://github.com/stencila/thema/commit/9b076e9e7371793f3f13ab57224ab82992158323))
* **CLI:** Ensure web module is built and embedded ([f04938d](https://github.com/stencila/thema/commit/f04938d919f89dfdf85cbd5335f3e96a33084afe))
* **CLI:** Match requested value format ([fa43114](https://github.com/stencila/thema/commit/fa43114ab9ef1ada3124624f8510f9a66934f0de))
* **CLI:** Only print once; fix non-pretty rendering ([4e3d32d](https://github.com/stencila/thema/commit/4e3d32dcc715ab508a9cb3c211bfc0868c5bf69f))
* **CLI:** Print alpha message to stderr, not stdout ([44d661c](https://github.com/stencila/thema/commit/44d661c5d5dd398ae0b4bc81d6a9341676446ef0))
* **CLI:** Remove flag gates; implement plain display ([37a9c66](https://github.com/stencila/thema/commit/37a9c66c65a3872e5eb0fea3d8f1773a4324c44f))
* **CLI:** Update the list of global args ([93f0a61](https://github.com/stencila/thema/commit/93f0a61827ba928edf8b774d9984fcb471eeb3cd))
* **Code analysis:** Allow expressions for first arg when detecting R write files ([add8741](https://github.com/stencila/thema/commit/add8741913c113c580bd8ffd97b093b32717741d))
* **Compile:** Move to using strings for hashes ([013c513](https://github.com/stencila/thema/commit/013c513286027822d4a0442df0f72096b6d416c8))
* **Compile code:** Use forward slash when merging paths ([cb802c6](https://github.com/stencila/thema/commit/cb802c64835224f8998dbac82e987f8980b4ac4f))
* **Config:** Remove unecessary validate attributes ([61108b9](https://github.com/stencila/thema/commit/61108b95d0c123b46dc05c9459b96b96ba2b21fe))
* **Config:** Renaming of config options to correctly generate schema; add docs ([2466e20](https://github.com/stencila/thema/commit/2466e20c5c1ee5aa832e03d41c29c4483db13829))
* **Config:** Store global config in Rust [skip release] ([6fe378f](https://github.com/stencila/thema/commit/6fe378f21d16b37e9430c59fbeb2509a157f8110))
* **Convert:** Only default to md for stdin ([f4a0332](https://github.com/stencila/thema/commit/f4a03320a1f754de3094e4d39f7fced1879674ac))
* **Decode Markdown:** Handle soft breaks and clean code ([128ef58](https://github.com/stencila/thema/commit/128ef58bbdf44fe5091c3ec529673492e541af0c))
* **dependencies:** update dependency @mdx-js/react to v1.6.22 ([48c673f](https://github.com/stencila/thema/commit/48c673fabb4f8a941d5e4cd4d2ea7c31b9ac24d0))
* **dependencies:** update dependency @reduxjs/toolkit to v1.6.1 ([bfca95c](https://github.com/stencila/thema/commit/bfca95ce6e19428d3b6cc11ee6bd099d195df15e))
* **dependencies:** update dependency @sentry/electron to v2.5.0 ([230cb52](https://github.com/stencila/thema/commit/230cb522ad09472ba667ec017ba5a45a69bd8d3d))
* **dependencies:** update dependency @sentry/electron to v2.5.1 ([09204b6](https://github.com/stencila/thema/commit/09204b6db2c88b2bab0dbd702da61f108496aff1))
* **dependencies:** update dependency @sentry/electron to v2.5.3 ([1494bf7](https://github.com/stencila/thema/commit/1494bf79ba0f7622421cf4b83b9daafdc6fdc514))
* **dependencies:** update dependency @sentry/electron to v2.5.4 ([96b009d](https://github.com/stencila/thema/commit/96b009dcd0bdd11324f336fac74452ccced63b6a))
* **dependencies:** update dependency @stencila/brand to v0.7.1 ([0eab022](https://github.com/stencila/thema/commit/0eab022296c7fc4e4a5559ad300faaedd4c5b8d8))
* **dependencies:** update dependency @stencila/brand to v0.7.4 ([8a03e6f](https://github.com/stencila/thema/commit/8a03e6fa50a7e670462305ae056c35dc1ca916bf))
* **dependencies:** update dependency @stencila/brand to v0.7.7 ([5a4b32a](https://github.com/stencila/thema/commit/5a4b32a1393ff820de92b8cbcaed6c2bf96ca1c8))
* **dependencies:** update dependency @stencila/encoda to v0.117.1 ([faa1f52](https://github.com/stencila/thema/commit/faa1f52cc235e5db272ce2620669b05a39c34bf5))
* **dependencies:** update dependency @stencila/schema to v1.10.1 ([44c045c](https://github.com/stencila/thema/commit/44c045c4d3c4c3dec3a159c86abd43c479ad3282))
* **dependencies:** update dependency fp-ts to v2.11.1 ([1def782](https://github.com/stencila/thema/commit/1def7829262eceaac1ea71f72b668be5c43ae815))
* **dependencies:** update dependency fp-ts to v2.11.3 ([3f3451d](https://github.com/stencila/thema/commit/3f3451dd4597b2bac58073caf51c495628337429))
* **dependencies:** update dependency fp-ts to v2.11.5 ([009eed7](https://github.com/stencila/thema/commit/009eed74575ab9e33eec427e9b356f1d0a4c015f))
* **dependencies:** update dependency i18next to v20.3.0 ([f97f78f](https://github.com/stencila/thema/commit/f97f78f808d48d9886f7c9a028557eb8aca9ba18))
* **dependencies:** update dependency i18next to v20.3.2 ([8e3b5d6](https://github.com/stencila/thema/commit/8e3b5d675d424faebaa360827ccda4d743b411ec))
* **dependencies:** update dependency i18next to v20.3.5 ([6dbf329](https://github.com/stencila/thema/commit/6dbf3299ce1729cc2be98ee13d019038bea7208e))
* **dependencies:** update dependency i18next to v20.6.1 ([dcd61c8](https://github.com/stencila/thema/commit/dcd61c8fdca16cc6cfdf61e0d10ff60a00cd8e8c))
* **dependencies:** update dependency i18next to v21 ([e189292](https://github.com/stencila/thema/commit/e189292a2adb2477fe288a31e4b3814ff01fd641))
* **dependencies:** update dependency i18next to v21.3.3 ([30c4559](https://github.com/stencila/thema/commit/30c455947443553ba22af3ae0ebf9b4400d3d232))
* **dependencies:** update dependency lit to ^2.0.2 ([96988be](https://github.com/stencila/thema/commit/96988bea040ff28e5592558e808c427adcdf12c9))
* **dependencies:** update dependency prosemirror-commands to ^1.1.11 ([e7ca347](https://github.com/stencila/thema/commit/e7ca3471256744820ad5fe9711924f3399e4e281))
* **dependencies:** update dependency prosemirror-view to ^1.20.3 ([d7feff8](https://github.com/stencila/thema/commit/d7feff8d10bd766c6269b353741688b4e39b4ca0))
* **dependencies:** update dependency rpc-websockets to ^7.4.15 ([f2d6416](https://github.com/stencila/thema/commit/f2d64163052da0ff813a28987784ed73a66fad9f))
* **dependencies:** update dependency uuid to v8 ([63cfb77](https://github.com/stencila/thema/commit/63cfb771b3d5df8f40d1c02a22e117be5d0e188e))
* **dependencies:** update docusaurus monorepo to v2.0.0-beta.0 ([1357707](https://github.com/stencila/thema/commit/1357707e80d6c4e91259b42dbef6bd816df23c4d))
* **dependencies:** update docusaurus monorepo to v2.0.0-beta.1 ([683a11b](https://github.com/stencila/thema/commit/683a11b6dd155da2d865808689fd1a9540acfb57))
* **dependencies:** update docusaurus monorepo to v2.0.0-beta.2 ([f108c56](https://github.com/stencila/thema/commit/f108c5669ad01a482f176ff63977688ce1178c5c))
* **dependencies:** update docusaurus monorepo to v2.0.0-beta.3 ([8425878](https://github.com/stencila/thema/commit/8425878177c5de62b21cc8cf35df3317cd08663c))
* **dependencies:** update docusaurus monorepo to v2.0.0-beta.4 ([b9c5680](https://github.com/stencila/thema/commit/b9c568034f454c64d166ce522d5ca8c298277e73))
* **dependencies:** update docusaurus monorepo to v2.0.0-beta.5 ([f98ed31](https://github.com/stencila/thema/commit/f98ed310655393a98b5b7d25b4ce17287a4da340))
* **dependencies:** update docusaurus monorepo to v2.0.0-beta.6 ([1b7c8f6](https://github.com/stencila/thema/commit/1b7c8f6ad2ee556b4f7f89244c69379c437bd287))
* **dependencies:** update docusaurus monorepo to v2.0.0-beta.8 ([4fdd859](https://github.com/stencila/thema/commit/4fdd8593b161cde1835b0756d58e96de043e2289))
* **dependencies:** update rust crate anyhow to 1.0.39 ([fe38ada](https://github.com/stencila/thema/commit/fe38ada50044149ef1b6b1869db3d7da7a4db6f2))
* **dependencies:** update rust crate anyhow to 1.0.40 ([de7567b](https://github.com/stencila/thema/commit/de7567bbecba42e66323800a3ad77cf0330c51a0))
* **dependencies:** update rust crate async-trait to v0.1.51 ([d53ed76](https://github.com/stencila/thema/commit/d53ed76fc2ebcf642f9d7a80c7cc046d4a7e92c4))
* **dependencies:** update rust crate bollard to 0.10.1 ([2a091c8](https://github.com/stencila/thema/commit/2a091c857f07ffb7a83bc9443a38febe3bed6436))
* **dependencies:** update rust crate flate2 to v1.0.21 ([4d696b2](https://github.com/stencila/thema/commit/4d696b20d4f23f86bce4b882e251ea5d282439c3))
* **dependencies:** update rust crate flate2 to v1.0.22 ([3cb0237](https://github.com/stencila/thema/commit/3cb02375445c4c2dffcd279fe50b346de7951cfa))
* **dependencies:** update rust crate futures to 0.3.14 ([30d5ac1](https://github.com/stencila/thema/commit/30d5ac144e5b782428e77a1c41b6fc413fa5776e))
* **dependencies:** update rust crate futures to 0.3.15 ([1cd8a38](https://github.com/stencila/thema/commit/1cd8a38670f572b46cf09a37c39f05ed7f8eba1a))
* **dependencies:** update rust crate futures to v0.3.16 ([4ff1108](https://github.com/stencila/thema/commit/4ff1108a29c6582053a9d57f19c344c7fbd8a7e9))
* **dependencies:** update rust crate futures to v0.3.17 ([d466145](https://github.com/stencila/thema/commit/d46614528544afff3c70439f84c9ac72a7f39109))
* **dependencies:** update rust crate handlebars to 3.5.4 ([5b1220c](https://github.com/stencila/thema/commit/5b1220cdf4011e6550006abc95fed55615357a86))
* **dependencies:** update rust crate handlebars to 4.0.1 ([5c62381](https://github.com/stencila/thema/commit/5c6238134e0cb53e5aa65f8818878bed7199e916))
* **dependencies:** update rust crate handlebars to v4 ([a2cb4c2](https://github.com/stencila/thema/commit/a2cb4c2728fb4747b82f6614e3bfcfc30ad1283a))
* **dependencies:** update rust crate handlebars to v4.1.0 ([31e0a11](https://github.com/stencila/thema/commit/31e0a11c9b98dc2a004ae0317cf14118de8c1ca0))
* **dependencies:** update rust crate handlebars to v4.1.1 ([aba4f44](https://github.com/stencila/thema/commit/aba4f44a508ff061fab8d0cc0acf2f1b11b62a48))
* **dependencies:** update rust crate handlebars to v4.1.2 ([3c2f026](https://github.com/stencila/thema/commit/3c2f02691d250531f8ccebaf94f852fc3b8e0a1c))
* **dependencies:** update rust crate handlebars to v4.1.3 ([ee65be4](https://github.com/stencila/thema/commit/ee65be4287d08e24eafdb00f8f0f07024a17a3df))
* **dependencies:** update rust crate ignore to 0.4.18 ([7cde18c](https://github.com/stencila/thema/commit/7cde18c3a3275e54b500049b7e25c26160c2097a))
* **dependencies:** update rust crate json5 to v0.4.0 ([d5e5350](https://github.com/stencila/thema/commit/d5e5350a0b9ec8bac3be885adc080a2a968d9604))
* **dependencies:** update rust crate json5 to v0.4.1 ([dd7e08b](https://github.com/stencila/thema/commit/dd7e08bd41f9476a2a56a95b2476cb81eafb043f))
* **dependencies:** update rust crate jsonschema to 0.11.0 ([733c133](https://github.com/stencila/thema/commit/733c1335a90b0d692279c094b87bdc2da26ee80f))
* **dependencies:** update rust crate jsonschema to 0.6.1 ([ca37acb](https://github.com/stencila/thema/commit/ca37acb63d2817a9fbf3635e25ed3c77c5130be2))
* **dependencies:** update rust crate jsonschema to 0.8.0 ([675ae18](https://github.com/stencila/thema/commit/675ae18be29a788c18add78ec2efd843b29e3e0d))
* **dependencies:** update rust crate jsonschema to 0.9.0 ([b574365](https://github.com/stencila/thema/commit/b5743654fa18a0e048f09f9fe9cb94608a863dd8))
* **dependencies:** update rust crate jsonschema to v0.12.0 ([7033502](https://github.com/stencila/thema/commit/703350283d9171ff8f69371a0b168b78cdba9729))
* **dependencies:** update rust crate jsonschema to v0.12.1 ([06966c9](https://github.com/stencila/thema/commit/06966c916a68434bc87491c37d58391e261f5c9a))
* **dependencies:** update rust crate jsonschema to v0.12.2 ([571a5ca](https://github.com/stencila/thema/commit/571a5ca4b1b42bd033e3edae57414054ff8d4e9b))
* **dependencies:** update rust crate linya to 0.2.0 ([800ae2a](https://github.com/stencila/thema/commit/800ae2a513b8c0aca4f092fc91fda607f0babf4d))
* **dependencies:** update rust crate linya to 0.2.1 ([a99911f](https://github.com/stencila/thema/commit/a99911f5687e822e9c34817946d1bf4790bf6ab1))
* **dependencies:** update rust crate neon to 0.8.0 ([44a9602](https://github.com/stencila/thema/commit/44a9602e13c9e0fdd808c30c46f104c68978b614))
* **dependencies:** update rust crate neon to 0.8.1 ([664e534](https://github.com/stencila/thema/commit/664e5345e4f965f144ad046eb8a4e6cbe20c5e68))
* **dependencies:** update rust crate neon to 0.8.2 ([be11c89](https://github.com/stencila/thema/commit/be11c89f074c7dfc7f452181f568afc6d94ce1a1))
* **dependencies:** update rust crate neon to 0.8.3 ([c3ee1ab](https://github.com/stencila/thema/commit/c3ee1abb83bc8384355c35bec14dac612f1602b2))
* **dependencies:** update rust crate neon to v0.9.0 ([897ee88](https://github.com/stencila/thema/commit/897ee88cee4ca9a712d68a9b293a0bd3165fb490))
* **dependencies:** update rust crate neon to v0.9.1 ([1a76f13](https://github.com/stencila/thema/commit/1a76f1341fd93f96a01c7c03725daf549c79a515))
* **dependencies:** update rust crate nom to v7.0.0 ([7fe48a0](https://github.com/stencila/thema/commit/7fe48a0b1f6db7559acf3418a07cbb01cd9c5432))
* **dependencies:** update rust crate nom to v7.0.0-alpha2 ([43ffa9c](https://github.com/stencila/thema/commit/43ffa9cbb2e1647c686e4854b47fc1f0481f3fb1))
* **dependencies:** update rust crate notify to 4.0.16 ([ca05744](https://github.com/stencila/thema/commit/ca0574419d94fdc7fcde59b0db99b64472e4a2ce))
* **dependencies:** update rust crate notify to 4.0.17 ([0ca93a1](https://github.com/stencila/thema/commit/0ca93a1c2a52a440eff2791b9923a7c41f2ac917))
* **dependencies:** update rust crate once_cell to 1.8.0 ([6ecafdb](https://github.com/stencila/thema/commit/6ecafdb75f904b48f5c5e9ede92b2be7b4f380b7))
* **dependencies:** update rust crate pathdiff to v0.2.1 ([0d42a92](https://github.com/stencila/thema/commit/0d42a921c19fe129f0ba674667612440fc7a79d3))
* **dependencies:** update rust crate pyo3 to v0.14.2 ([efab7b4](https://github.com/stencila/thema/commit/efab7b4f0f0f0e75f0d1cfbe65a9fd3889ae0f40))
* **dependencies:** update rust crate pyo3 to v0.14.3 ([4ea92eb](https://github.com/stencila/thema/commit/4ea92ebe37ce3068930738f251aa89605bd051f2))
* **dependencies:** update rust crate pyo3 to v0.14.4 ([dab290d](https://github.com/stencila/thema/commit/dab290d3cd76e116adc58cf9ae459718f0923441))
* **dependencies:** update rust crate pyo3 to v0.14.5 ([48337ba](https://github.com/stencila/thema/commit/48337bab052595572247a7692191d5f4541e7cc7))
* **dependencies:** update rust crate rand to 0.8.4 ([3e63c06](https://github.com/stencila/thema/commit/3e63c06ffc6b92bbff826173c7fbac58cd965296))
* **dependencies:** update rust crate regex to 1.4.5 ([d97670e](https://github.com/stencila/thema/commit/d97670ef75c4d0d6996ed00ad1ffeaf0b8f41c97))
* **dependencies:** update rust crate regex to 1.4.6 ([83357b0](https://github.com/stencila/thema/commit/83357b093deb2cecc2249845460c5a1832d5a04b))
* **dependencies:** update rust crate regex to 1.5.4 ([bb12f1a](https://github.com/stencila/thema/commit/bb12f1a552ea26f9928605eb1ab8b0292c3eeee3))
* **dependencies:** update rust crate reqwest to 0.11.2 ([6d3c08d](https://github.com/stencila/thema/commit/6d3c08d53b3e8236b5e9cd491e36cc1531a1b8fb))
* **dependencies:** update rust crate reqwest to 0.11.3 ([8f229ad](https://github.com/stencila/thema/commit/8f229ad823501d249a61121b820459a2cd776e43))
* **dependencies:** update rust crate reqwest to v0.11.4 ([6b048ef](https://github.com/stencila/thema/commit/6b048efe564062568cd61987478ac8ef85646ad1))
* **dependencies:** update rust crate reqwest to v0.11.5 ([950ec62](https://github.com/stencila/thema/commit/950ec62d5742ebb70f97351918d8a3cead7317e9))
* **dependencies:** update rust crate reqwest to v0.11.6 ([3a99729](https://github.com/stencila/thema/commit/3a99729ca2d83ff5518d3d1c9e1e3b44bb2a663a))
* **dependencies:** update rust crate rust-embed to v6 ([ed6f2e9](https://github.com/stencila/thema/commit/ed6f2e917ccd73db2b5475bc9efd78e81157b739))
* **dependencies:** update rust crate rust-embed to v6.0.1 ([5c684f8](https://github.com/stencila/thema/commit/5c684f8a30139e8fcf58bb43bde7bd779964dd13))
* **dependencies:** update rust crate rust-embed to v6.2.0 ([1e705f0](https://github.com/stencila/thema/commit/1e705f0b4fd5a0bfdf75d8bbd50652249bc7c414))
* **dependencies:** update rust crate rustyline to 8.2.0 ([168d060](https://github.com/stencila/thema/commit/168d06027554e8f2e0a6afa73d3a74b3c5b18601))
* **dependencies:** update rust crate rustyline to v9 ([92ca10c](https://github.com/stencila/thema/commit/92ca10c4be941b6c8810314e35f3ea09b83adb1d))
* **dependencies:** update rust crate rustyline-derive to v0.5.0 ([d0194d5](https://github.com/stencila/thema/commit/d0194d5291e996338260196cd4671abaa78b6fb9))
* **dependencies:** update rust crate schemars to v0.8.4 ([14b6d9f](https://github.com/stencila/thema/commit/14b6d9f49a7fbfc7cd74ebd7a31b2d818791efa7))
* **dependencies:** update rust crate schemars to v0.8.5 ([82741f6](https://github.com/stencila/thema/commit/82741f6671ddfedbb685bfb71d67b2611777593c))
* **dependencies:** update rust crate schemars to v0.8.6 ([1d87126](https://github.com/stencila/thema/commit/1d871262190303beb36e4063c6e190953fe6808a))
* **dependencies:** update rust crate self_update to 0.26.0 ([8141bef](https://github.com/stencila/thema/commit/8141bef700e085e7900030b5d34954464cb41c73))
* **dependencies:** update rust crate self_update to 0.27.0 ([75a71fc](https://github.com/stencila/thema/commit/75a71fcebd4a1b8f6e3e508f5faf137680f391ed))
* **dependencies:** update rust crate semver to 1.0.3 ([74ac76b](https://github.com/stencila/thema/commit/74ac76b11202c7fcd39356e384aaa508d74db83c))
* **dependencies:** update rust crate semver to v1 ([05457ac](https://github.com/stencila/thema/commit/05457ac653ae2d2dc01fc407e33510936cb15f80))
* **dependencies:** update rust crate semver to v1.0.4 ([80a1eb1](https://github.com/stencila/thema/commit/80a1eb1e4c22bf6c95527ceb3e2cc6f70ed7977b))
* **dependencies:** update rust crate serde to 1.0.124 ([093b70f](https://github.com/stencila/thema/commit/093b70f0c8d8faf62767aca6e6d457e6cd270eb2))
* **dependencies:** update rust crate serde to 1.0.125 ([1c17e23](https://github.com/stencila/thema/commit/1c17e2306afde6f883f6d0b492053d43403255d2))
* **dependencies:** update rust crate serde to 1.0.126 ([b2ca64f](https://github.com/stencila/thema/commit/b2ca64f5b9acb4b407a4ad96aebf5f8be877cd81))
* **dependencies:** update rust crate serde to v1.0.127 ([d8502a6](https://github.com/stencila/thema/commit/d8502a6ae6cc3569587ae4e5de929ab14d51534a))
* **dependencies:** update rust crate serde to v1.0.128 ([ad97ef7](https://github.com/stencila/thema/commit/ad97ef7be3c3df080fb9dd7d9db2b319dd899fd9))
* **dependencies:** update rust crate serde to v1.0.130 ([12f2fb7](https://github.com/stencila/thema/commit/12f2fb7ef863d9bb7fea0ca0826faddded2728d9))
* **dependencies:** update rust crate serde_json to v1.0.66 ([1970155](https://github.com/stencila/thema/commit/197015547c64feec0e856a3e4366d1a525a845b3))
* **dependencies:** update rust crate serde_json to v1.0.67 ([de10000](https://github.com/stencila/thema/commit/de1000085aa8c18c8586f75b4760c9bb663d4c9a))
* **dependencies:** update rust crate serde_json to v1.0.68 ([65d844e](https://github.com/stencila/thema/commit/65d844ef6dc563ecdec66598a73bcadfc51faeb5))
* **dependencies:** update rust crate serde_with to 1.9.1 ([b32479b](https://github.com/stencila/thema/commit/b32479b282ce0798e23bf0aa334bfef3ec862c74))
* **dependencies:** update rust crate serde_with to 1.9.2 ([7e805c7](https://github.com/stencila/thema/commit/7e805c7428650b9e8df179e685d32301a99c447d))
* **dependencies:** update rust crate serde_with to 1.9.4 ([994a00a](https://github.com/stencila/thema/commit/994a00a86c4a19b58c6b32096c820e62c5ff2f80))
* **dependencies:** update rust crate serde_with to v1.10.0 ([b37260b](https://github.com/stencila/thema/commit/b37260b968ea57e5cc22e4f6fc16a32bce2ade75))
* **dependencies:** update rust crate serde_with to v1.11.0 ([4f81182](https://github.com/stencila/thema/commit/4f811828e397ad67f27c0559cf5aa078a44083e3))
* **dependencies:** update rust crate serde_yaml to v0.8.19 ([34d46b8](https://github.com/stencila/thema/commit/34d46b8b85bd946c3036db0da97d7502ba707a04))
* **dependencies:** update rust crate serde_yaml to v0.8.20 ([e4648ce](https://github.com/stencila/thema/commit/e4648ce6c07f5c725fe36d61756693da80173781))
* **dependencies:** update rust crate serde_yaml to v0.8.21 ([c45a920](https://github.com/stencila/thema/commit/c45a92045b1d2f7b6a2738060cfa2efa39388a23))
* **dependencies:** update rust crate sha2 to 0.9.6 ([259d857](https://github.com/stencila/thema/commit/259d857a833cb7e5f53c7b85cfcdb431175bcaf0))
* **dependencies:** update rust crate sha2 to 0.9.8 ([bc66834](https://github.com/stencila/thema/commit/bc66834e7012a89f24458ae7361ed44bccc975c4))
* **dependencies:** update rust crate similar to v2 ([a55eeb3](https://github.com/stencila/thema/commit/a55eeb37007695d25d540b16e58df56d83ed822c))
* **dependencies:** update rust crate similar to v2.1.0 ([e606746](https://github.com/stencila/thema/commit/e60674625ebe955d27b28222d353b400ae2035ec))
* **dependencies:** update rust crate stencila-schema to 1.7.2 ([9acd4f4](https://github.com/stencila/thema/commit/9acd4f4c580a1f908419370d11226deee49e73a3))
* **dependencies:** update rust crate structopt to v0.3.22 ([f66b84a](https://github.com/stencila/thema/commit/f66b84a025b5b7bda131ad008dcda84bc770e04a))
* **dependencies:** update rust crate structopt to v0.3.23 ([84628eb](https://github.com/stencila/thema/commit/84628eb20f337791271bd02c43f99415f4c65925))
* **dependencies:** update rust crate structopt to v0.3.25 ([7c738cf](https://github.com/stencila/thema/commit/7c738cf8f3a552c58b2a323d86186f9633f0acc7))
* **dependencies:** update rust crate strum to 0.21 ([fd1d2ca](https://github.com/stencila/thema/commit/fd1d2ca5b4023ec334e3a2a6e64168e0d4149810))
* **dependencies:** update rust crate strum to v0.22.0 ([987858e](https://github.com/stencila/thema/commit/987858e181e4dba1c6786e6b06c59cb72b13d50f))
* **dependencies:** update rust crate strum_macros to 0.21.1 ([546bb42](https://github.com/stencila/thema/commit/546bb42b28def3042b211bed317215fd4a22f37a))
* **dependencies:** update rust crate strum_macros to v0.22.0 ([6e27fae](https://github.com/stencila/thema/commit/6e27fae19d84ec4934074cf22623e71a7a73aa3c))
* **dependencies:** update rust crate syntect to v4.6.0 ([7e6d7af](https://github.com/stencila/thema/commit/7e6d7af38359d3c7cd76c301fb974c8a6c3fe5c7))
* **dependencies:** update rust crate tar to v0.4.37 ([4eaa530](https://github.com/stencila/thema/commit/4eaa530a85a148c7ee5719ee427ae32892b1a92e))
* **dependencies:** update rust crate termimad to 0.10.2 ([1b9a9ca](https://github.com/stencila/thema/commit/1b9a9ca837e96fa5400f960bbdf61b5b7ee7c819))
* **dependencies:** update rust crate termimad to 0.10.3 ([9d8ea01](https://github.com/stencila/thema/commit/9d8ea01ef941a2ba946c0197675ed572e3fd25af))
* **dependencies:** update rust crate termimad to 0.11.1 ([74b40f6](https://github.com/stencila/thema/commit/74b40f6c75444ce32253ea4da5a1e3789dcf8935))
* **dependencies:** update rust crate termimad to v0.12.1 ([6bba6d6](https://github.com/stencila/thema/commit/6bba6d6ae628678ca513484ee070cf10ed7ad820))
* **dependencies:** update rust crate termimad to v0.13.0 ([caa1be4](https://github.com/stencila/thema/commit/caa1be42ea132fa78a36feb2101a651163223c12))
* **dependencies:** update rust crate termimad to v0.14.0 ([093d15c](https://github.com/stencila/thema/commit/093d15c20e7a34c6e4780d6482f5535bdb240b28))
* **dependencies:** update rust crate termimad to v0.14.1 ([898293e](https://github.com/stencila/thema/commit/898293e8fe0b7de273864cbe016736635eb51dd8))
* **dependencies:** update rust crate termimad to v0.14.2 ([307e963](https://github.com/stencila/thema/commit/307e963783cd1347602e886f6b290f4ff77ec6d7))
* **dependencies:** update rust crate termimad to v0.15.0 ([485c1fc](https://github.com/stencila/thema/commit/485c1fc174627498f93841f947679745499f1ce3))
* **dependencies:** update rust crate termimad to v0.16.0 ([d96156a](https://github.com/stencila/thema/commit/d96156ade09bb0744b253f53ae6ad7db583731c7))
* **dependencies:** update rust crate termimad to v0.16.1 ([f43f150](https://github.com/stencila/thema/commit/f43f150fc356601604b5cc08001a59ccb2961842))
* **dependencies:** update rust crate termimad to v0.16.2 ([9e005ae](https://github.com/stencila/thema/commit/9e005aef88e0c845f8da5b05526b13a69f28a744))
* **dependencies:** update rust crate termimad to v0.16.4 ([14e1cff](https://github.com/stencila/thema/commit/14e1cffefef18993940aa7863c5212ce8ba1d03b))
* **dependencies:** update rust crate thiserror to 1.0.25 ([8858729](https://github.com/stencila/thema/commit/88587293b831c2d177638e45faccea23966cb116))
* **dependencies:** update rust crate thiserror to v1.0.26 ([c3f36b1](https://github.com/stencila/thema/commit/c3f36b1ecb0576a290c4a8edd7d618ced1f94c06))
* **dependencies:** update rust crate thiserror to v1.0.29 ([5ab61cf](https://github.com/stencila/thema/commit/5ab61cf926e617bca875425ac9c7318dbb760e97))
* **dependencies:** update rust crate thiserror to v1.0.30 ([f8db6d2](https://github.com/stencila/thema/commit/f8db6d23fd9f07cde2a54f6643fdf66997663cc9))
* **dependencies:** update rust crate tokio to 1.3.0 ([3964dcf](https://github.com/stencila/thema/commit/3964dcf5980097c754c42fa5b987b14e6e1dedae))
* **dependencies:** update rust crate tokio to 1.4.0 ([7f4c676](https://github.com/stencila/thema/commit/7f4c676d7c18939b1576618fe23f8b934e8bd9cf))
* **dependencies:** update rust crate tokio to 1.5.0 ([441440a](https://github.com/stencila/thema/commit/441440a0bc26ee2eaee7743157d75a8bc3441735))
* **dependencies:** update rust crate tokio to 1.6.0 ([50b485c](https://github.com/stencila/thema/commit/50b485c30b8e354e57fce97238ec78b1a911984f))
* **dependencies:** update rust crate tokio to 1.6.1 ([a85a67c](https://github.com/stencila/thema/commit/a85a67c07b6f1669628a0a633ff12cc73818b738))
* **dependencies:** update rust crate tokio to v1.10.0 ([9ea2d33](https://github.com/stencila/thema/commit/9ea2d33608f8c0dc76673c38faf5be2b1538b189))
* **dependencies:** update rust crate tokio to v1.11.0 ([1373a2e](https://github.com/stencila/thema/commit/1373a2e8b932ab3569f3a66c567f82b5b42c15e5))
* **dependencies:** update rust crate tokio to v1.12.0 ([8ae8653](https://github.com/stencila/thema/commit/8ae86530e50f81e36b93b9534bffa189f9a834f0))
* **dependencies:** update rust crate tokio to v1.8.0 ([bafa3f0](https://github.com/stencila/thema/commit/bafa3f0e6ff6f233398b6255705716a3c2001b34))
* **dependencies:** update rust crate tokio to v1.9.0 ([2333d82](https://github.com/stencila/thema/commit/2333d82d58f637889cd82469dd8e04051ffb07ca))
* **dependencies:** update rust crate tokio-tungstenite to 0.14.0 ([239d113](https://github.com/stencila/thema/commit/239d1139ef52cf76bd29e10ffa451f4bb7a3a984))
* **dependencies:** update rust crate tokio-tungstenite to v0.15.0 ([9d78457](https://github.com/stencila/thema/commit/9d784578948d27431a1a14c4d84c4b39b1aa3e55))
* **dependencies:** update rust crate tracing to v0.1.28 ([29b9479](https://github.com/stencila/thema/commit/29b947920b20cdb2d8c93ce04ee44f2c9b876b12))
* **dependencies:** update rust crate tracing to v0.1.29 ([b7e871f](https://github.com/stencila/thema/commit/b7e871fd65a42bb32b804ed61ed4d71aa558ea6f))
* **dependencies:** update rust crate tracing-subscriber to v0.2.19 ([94d93f4](https://github.com/stencila/thema/commit/94d93f4be9e011e095eb800b447edcbe6cbe818b))
* **dependencies:** update rust crate tracing-subscriber to v0.2.20 ([73625ee](https://github.com/stencila/thema/commit/73625eefce913dfbf0211973cf7e5c4c9b14d10c))
* **dependencies:** update rust crate tracing-subscriber to v0.2.23 ([ba94992](https://github.com/stencila/thema/commit/ba94992ba06493416782490e638444dd49d84f36))
* **dependencies:** update rust crate tracing-subscriber to v0.2.24 ([8fc8c66](https://github.com/stencila/thema/commit/8fc8c66d5d8e45c461c8a514d863dd9081a53546))
* **dependencies:** update rust crate tracing-subscriber to v0.2.25 ([c1c3342](https://github.com/stencila/thema/commit/c1c334215c2e0a1670ff973b0bc451c4acbcfffb))
* **dependencies:** update rust crate url to 2.2.2 ([80e8b8e](https://github.com/stencila/thema/commit/80e8b8ed850010c4a0dfb05a8941fe1ce8176977))
* **dependencies:** update rust crate validator to 0.13.0 ([72606ac](https://github.com/stencila/thema/commit/72606ac21a339be81e89a984fba2b723aafb83e7))
* **dependencies:** update rust crate validator to v0.14.0 ([95567c4](https://github.com/stencila/thema/commit/95567c44f3f31b8470e8530103d979a2380d3d5f))
* **dependencies:** update rust crate warp to 0.3.1 ([5800b97](https://github.com/stencila/thema/commit/5800b97b1ada4827ae2882908e7abbe1706deb6c))
* **dependencies:** update rust crate which to v4.2.2 ([ca82078](https://github.com/stencila/thema/commit/ca8207835df29b9895e158a3b90ec534defb6222))
* **Dependencies:** Pin funty ([1705859](https://github.com/stencila/thema/commit/17058592469267be09c30124b2b75ce995e2930c))
* **Dependencies:** Upgrade Schema ([29808ab](https://github.com/stencila/thema/commit/29808abc7b914153052e11e1e4275860fa0bff2b))
* **Dependencies:** Upgrade Stencila Schema ([c58c1b2](https://github.com/stencila/thema/commit/c58c1b261e62d04473763ebafc62f87a878dfbf7))
* **Dependencies:** Upgrade to nom to avoid funty issue ([60252e8](https://github.com/stencila/thema/commit/60252e885bc3b3c22ac1211c944be5dd3d7067bc))
* **Dependencies:** Upgrade to Schema v1.11.0 ([e288bf6](https://github.com/stencila/thema/commit/e288bf61f9b820c467d452dec43b9233ca1bfa7e))
* **Dependencies:** Upgrade tokio after cardo audit ([995f6fb](https://github.com/stencila/thema/commit/995f6fb58bb521297f1030961cf577a63dd58eee))
* **Dependencies:** Use latest version of `png` crate ([a9763d7](https://github.com/stencila/thema/commit/a9763d702822be5dc1da09b857f142e2edd1c74f))
* **Deps:** Cargo audit fix ([6d8589b](https://github.com/stencila/thema/commit/6d8589bcfa8ef9515d072e0a312b9a218084d8f8))
* **Deps:** Only require `rust-embed` once; upgrade ([9e16213](https://github.com/stencila/thema/commit/9e16213211d1e2efa4a26cdbbfdf3e7694096301))
* **Deps:** Pin all Rust dependencies for more reproducible builds ([bcc3f0c](https://github.com/stencila/thema/commit/bcc3f0cd18d5472e363efc9796e51bb23bcf832e))
* **Deps:** Update dependencies ([b41ae00](https://github.com/stencila/thema/commit/b41ae0034d72511c4827a08dab0c60f908b3e074))
* **Deps:** Use dirs-next instead of dirs ([b5fe31d](https://github.com/stencila/thema/commit/b5fe31d0b1edb2f6ffacb8a8ec052c60cf9a5a01))
* **Desktop:** Account for removal of format type ([2a590be](https://github.com/stencila/thema/commit/2a590beb728cd5b4974a05ab18db717698208008))
* **Desktop:** Add a preferences menu item ([ed2ed86](https://github.com/stencila/thema/commit/ed2ed86066f34686b434ad8c65ac6c8d7c5df61d))
* **Desktop:** Add protocol for secure access to media files ([98b5877](https://github.com/stencila/thema/commit/98b58770bd8562fe10d14c66a27847c9169ad194))
* **Desktop:** Allowing loading images using 'local:' protocol ([51cd9e4](https://github.com/stencila/thema/commit/51cd9e48476b582e33c4ad2ca54a82fdbc58e8a0))
* **Desktop:** Clean up document event listeners to avoid memory leaks ([13bd3c1](https://github.com/stencila/thema/commit/13bd3c1f2a40e6e7d098f1911940662837e66fe5))
* **Desktop:** Close launcher window when opening Project using file browser ([391fc1d](https://github.com/stencila/thema/commit/391fc1db2cfe8a0eed8a41a35d5403d632638ef5))
* **Desktop:** Don't crash when reloading project window ([7f21255](https://github.com/stencila/thema/commit/7f212554ad7166a15f08bfbeb1f07ca6e075b5da))
* **Desktop:** Expose tab closing shortcuts on all platforms ([96c6554](https://github.com/stencila/thema/commit/96c65541160dcd865f4c8282b21eecead5a6681b))
* **Desktop:** Fix capturing of unhandled promise rejection errors ([e95b5e2](https://github.com/stencila/thema/commit/e95b5e22ac512e990fb67edee9a54445e763c529))
* **Desktop:** Fix client rendering issues when building on Ubuntu ([a12fa66](https://github.com/stencila/thema/commit/a12fa669d796a6b36547b2f976b9447c77bf5d75))
* **Desktop:** Fix crash on non Mac operating systems ([008adc1](https://github.com/stencila/thema/commit/008adc178252f23dd38c7fbf330f36a647728957)), closes [#1059](https://github.com/stencila/thema/issues/1059)
* **Desktop:** Fix error reporting integration ([b184490](https://github.com/stencila/thema/commit/b184490df7d2f9e9523c16ddb6dc55ca824671f1))
* **Desktop:** Fix issues when trying to register duplicate IPC handlers ([1504b37](https://github.com/stencila/thema/commit/1504b373528846f374fcfae10876451effa981f4))
* **Desktop:** Fix loading of SVG assets over custom app protocol ([375d8c3](https://github.com/stencila/thema/commit/375d8c366513219458c0780ed8821ffcbf012e60))
* **Desktop:** Fix mismatched package version failing builds ([30aa48b](https://github.com/stencila/thema/commit/30aa48b85ec6b23070aa744ff12679def19f9308))
* **Desktop:** Fix ordering of Recent Projects list ([01e5081](https://github.com/stencila/thema/commit/01e5081d4a64b88b1ffb37b4266196c4c461820c))
* **Desktop:** Fix periodic failure to open project window ([39e2ccf](https://github.com/stencila/thema/commit/39e2ccf8e7d0a49e78656650688c247488dab409))
* **Desktop:** Fix plugins settings view title ([35835b0](https://github.com/stencila/thema/commit/35835b04773a53137d002f4d024f80c194424679))
* **Desktop:** Get and use  preview when changing document ([daeac8d](https://github.com/stencila/thema/commit/daeac8dd0398bb4d3bd068436466879678a521ba))
* **Desktop:** Handle paths with spaces and other percent encoded names ([fb642b6](https://github.com/stencila/thema/commit/fb642b6b6f218284c21a63145fed3ce02e7b1e12))
* **Desktop:** Improve configuration of `deb` builds ([de3f939](https://github.com/stencila/thema/commit/de3f9392a046db9b8720d752a2feaa1bff095bac))
* **Desktop:** Improve usability and legibility of tab close icon ([f47b582](https://github.com/stencila/thema/commit/f47b582c62c9bc2188703c4684cc528bdac6989d))
* **Desktop:** Inline env variables when building Renderer files ([f06b73d](https://github.com/stencila/thema/commit/f06b73dc3d2b66314523c7287bd32c8fb7100d22))
* **Desktop:** Make first launch experience work across platforms ([af5cca8](https://github.com/stencila/thema/commit/af5cca8910ee420e436fa74e107f21ffcc9b6e48))
* **Desktop:** NPM audit fix ([0405553](https://github.com/stencila/thema/commit/0405553447156a2cefe150b754dff7674ceb8656))
* **Desktop:** Only remove IPC handlers if no windows require them ([1b39bba](https://github.com/stencila/thema/commit/1b39bba37cb82f85c314387a55c4d8b5a02439d3))
* **Desktop:** Race condition when loading window & calling IPC method ([80f02df](https://github.com/stencila/thema/commit/80f02dfa5306586610cd2e02eac3ff6f66f44f71))
* **Desktop:** Remove duplicated Window Close menu item ([b467ca1](https://github.com/stencila/thema/commit/b467ca185ab0505098e80aa6a7657995a33ba2b6)), closes [#1176](https://github.com/stencila/thema/issues/1176)
* **Desktop:** Send IPC events only to relevant project windows ([ae1e8fe](https://github.com/stencila/thema/commit/ae1e8fec447ad22d80f65b422e287eb8ca35093f))
* **Desktop:** Unsubscribe from document when component is disconnected ([51d181c](https://github.com/stencila/thema/commit/51d181c2f70f47564ba6724692950d57ed2b300c))
* **Desktop:** Update editor contents when file changes on disk ([6f1cdd4](https://github.com/stencila/thema/commit/6f1cdd41e3bc837250d83bcbdd1bfc8b5cf97950))
* **Desktop:** Use OS specific location when adding Preferences menu item ([81724f4](https://github.com/stencila/thema/commit/81724f4336d8c30442529ae61e7ed9d0442881de))
* **Docker images:** Install binary for faster build ([981cb23](https://github.com/stencila/thema/commit/981cb23328df5ca518467a91e3a202bc7cb6e168))
* **Document merge:**  Make CLI command usable as a Git merge driver ([2810b25](https://github.com/stencila/thema/commit/2810b2529d9e21134d41b28f8cce6edbf9a0b1ea))
* **Documents:** Add `previewable` property to indicate whether preview panel should be opened by default ([9830da3](https://github.com/stencila/thema/commit/9830da3be8bffc73601d7b3780ee72acd50e80c1))
* **Documents:** Add HTML and  `unregistered` formats ([c9c5f9a](https://github.com/stencila/thema/commit/c9c5f9a6773e6ed5c8c0ef6a1f4a0b1155a65197))
* **Documents:** Complete implementation of dump method ([b672a95](https://github.com/stencila/thema/commit/b672a956036f76a5ca6141da7eeabbdac163bea4))
* **Documents:** Convert content if necessary on load; check that binary file exists on update ([a1b8382](https://github.com/stencila/thema/commit/a1b83827276518dc9757a8f478387ac614eb85dd))
* **Documents:** Do not bubble up errors from from update mthod ([f8e55be](https://github.com/stencila/thema/commit/f8e55be0d011b0fa4f4b173085cbb6d3880bf29a))
* **Documents:** End watcher thread properly; consistency with `ProjectHandler` ([9eb7ff8](https://github.com/stencila/thema/commit/9eb7ff8d8a71587df1e0c9f4dabf4b2f9fc91db9))
* **Documents:** Ignore midifications after writes ([21f8fd0](https://github.com/stencila/thema/commit/21f8fd0f33e3a9e52bc19e051d6ca523278f276d))
* **Documents:** Make document path required; create temp path for new docs ([a8e8a4d](https://github.com/stencila/thema/commit/a8e8a4d503031b9530e9796de1fbc4d81bb0ff61))
* **Documents:** Make serialization of relations more robust and less lossy ([018ad39](https://github.com/stencila/thema/commit/018ad3992cd3b8de3119f7eb81cf6ee0cbf0a564)), closes [#1118](https://github.com/stencila/thema/issues/1118)
* **Documents:** Overwrite document relations rather than always extending it ([3d9a4e2](https://github.com/stencila/thema/commit/3d9a4e254d7ecf0ad32335f851a7515cc2fc1ce6))
* **Documents:** Pluralize topic as for projects ([457d82e](https://github.com/stencila/thema/commit/457d82e09bc78a40cd43f0da827f47e1c78e4b43))
* **Documents:** Publish encoded event from load; fix Node.js test ([5e0c888](https://github.com/stencila/thema/commit/5e0c888b9f767f1bfb6d46741e351a376f5a360b))
* **Documents:** Reinstate document watching ([209e051](https://github.com/stencila/thema/commit/209e051cfdd66762d2bb73d15707de35495106c1))
* **Documents:** Remove file:// scheme when creating resource ([744fb3f](https://github.com/stencila/thema/commit/744fb3f8385a6b6e12d74d4e8c816435a8548456))
* **Documents:** Restrict links to the project directory ([4c81020](https://github.com/stencila/thema/commit/4c81020356ccf9a725537c57cd4aa8507574e0b2))
* **Documents:** Set previewable flag based on format ([153018a](https://github.com/stencila/thema/commit/153018aa2da1d11a1c62e7d4f1e5ba165f844a54))
* **Documents:** Set root to null if no content ([472c1e8](https://github.com/stencila/thema/commit/472c1e8376b5acd47feda7d7540cbc39bba545a7))
* **Documents:** Use `debug` instead of `warn` log level ([bcf6af6](https://github.com/stencila/thema/commit/bcf6af6c259b687ed9796a0f8c89d862255e5c85)), closes [#1135](https://github.com/stencila/thema/issues/1135)
* **Documents:** Use CreativeWorkTypes for root ([91592ff](https://github.com/stencila/thema/commit/91592ff4d511d37144c0e5019cbcbdf5fb6e9b3c))
* **Documents:** Use stencila-schema ([d379615](https://github.com/stencila/thema/commit/d3796152970646a6e2cd3056132a91089aefd420))
* **Documents:** Watch parent folder; read and update binary files ([72fd25f](https://github.com/stencila/thema/commit/72fd25f417e9e5741fa20ea0c8fb58bba80f0e0c))
* **Documents:** When writing as other format ensure standalone ([07e33a9](https://github.com/stencila/thema/commit/07e33a9c94fad92fcdbbe68d9d0c87bf2db47486))
* **DOCX:** Extract media files when decoding ([cbf8c01](https://github.com/stencila/thema/commit/cbf8c0130b58e6003ef4f77314b3773ed7f1090f))
* **DOM Patches:** Add JSON to add and replace operations for use on WebComponents ([45bf1cf](https://github.com/stencila/thema/commit/45bf1cf74874a96608b63da01fba4d00c68bdb59))
* **Editor:** Correctly set editor state after previewing media files ([1ed4d8e](https://github.com/stencila/thema/commit/1ed4d8e198e355fa9a4837a2fc85bb226ef16132))
* **Editor:** Fix parsing of `CodeFragment` nodes ([0296876](https://github.com/stencila/thema/commit/0296876b8627dc7baff8e31aac67a92fd4f4e6ed))
* **Editor:** Fix programming language update event ([cbf30f0](https://github.com/stencila/thema/commit/cbf30f026bf598df4dfc836c3cfe615c65384ca3))
* **Editor:** Fix UI jumping around when clicking into code editor ([3eec143](https://github.com/stencila/thema/commit/3eec143c5f4740d7f2c0b8d57898d45e2ca8f3ad))
* **Editor:** Preserve node type when copy/pasting CodeBlock elements ([d3958b2](https://github.com/stencila/thema/commit/d3958b22f428df38391252313da0046ac5428316))
* **ELife Source:** Add a user agent header to avoid 403 ([f15125b](https://github.com/stencila/thema/commit/f15125b8d4846c7e9273884d8d6e571b47f9fd2f))
* **Encoda:** Update encoda to 0.71.2 ([658e2bc](https://github.com/stencila/thema/commit/658e2bc97d29baaf9188fa14ff92d07da62f9645))
* **Encode HTML:** Create content for Cite nodes as needed ([d60862e](https://github.com/stencila/thema/commit/d60862e264f9645eb9d940e870ea538ff11da78d))
* **Errors:** Report unhandled errors ([29f9748](https://github.com/stencila/thema/commit/29f97481b42b2ac4ae138b86cea82d935ac4e8d6))
* **Execute:** Correct function signature ([8fd8347](https://github.com/stencila/thema/commit/8fd83477a5ca9b89011acc403cb8ae3f2d9d254c))
* **File list:** Add keys to items to provide stable identity ([7880374](https://github.com/stencila/thema/commit/7880374ac38a0c8b9ed684d9e5f877d7bb12c551))
* **File paths:** Use `lexiclean` for cross-platform path normalization ([a3e5775](https://github.com/stencila/thema/commit/a3e5775607854cdf84ac6d4e77e46e38a0281828))
* **File watching:** Allow glob patterns to be excluded ([37a33c3](https://github.com/stencila/thema/commit/37a33c337cae4b76d417020c110fb849a0933cfb))
* **Files:** Call correct registry function on remove event ([8397e8f](https://github.com/stencila/thema/commit/8397e8f67ffccfa37b53e24158ed77c880bf4d93))
* **Files:** Handle creation of empty nested dirs; improve robustness of updates ([425045b](https://github.com/stencila/thema/commit/425045b9a48da06a286e96d6089a8d638200f4d4))
* **Files:** Publish a refresh event when file registry is refreshed ([57d9190](https://github.com/stencila/thema/commit/57d91906008b1920eb5fb7bc0951507398a34923))
* **Files:** Use a BTreeMap and ignore project folder ([a153c9c](https://github.com/stencila/thema/commit/a153c9c8ba1884a3629037ab98c7dfaf9d8161a7))
* **Formats:** Allow decoding of RPNGs ([b196d42](https://github.com/stencila/thema/commit/b196d427887ba721b76009befa9da90836a9b210))
* **Formats:** Unregistered formats have binary false ([37d13a8](https://github.com/stencila/thema/commit/37d13a86e07d78028d9ff6305445da645d9a1415))
* **Graphs:** Serialize paths as Unix forward slash paths ([c201e15](https://github.com/stencila/thema/commit/c201e1556d97a724c9f68c3dcee36c4f9eb41eaa))
* **HTML:** Add controls attribute to audio and video elements ([2543750](https://github.com/stencila/thema/commit/25437504085484e19ca439255d5eedf31c9d6379))
* **HTML:** Add encoding of authors and their affiliations ([1da7dea](https://github.com/stencila/thema/commit/1da7dea6e3f666b0de238987e65a7334f30bc792))
* **HTML:** Always decode list ordering ([7859082](https://github.com/stencila/thema/commit/78590821f974dc0ad9c43ce6bd745e12eeb4f100))
* **HTML:** Audio tag can not be self closing ([d785a10](https://github.com/stencila/thema/commit/d785a1092621c34c0ea77dedd1c1562dba14dff9))
* **HTML:** Close name span ([6c28c7a](https://github.com/stencila/thema/commit/6c28c7a1295e4d2d554a70c9fe1bdb8f6252aa1a))
* **HTML:** Decode to CodeBlock ([ac6b7a2](https://github.com/stencila/thema/commit/ac6b7a26b3f88171fce6e642a9ba78073a3382da))
* **HTML:** Do not escape forward slashes in media object src attributes ([6d58513](https://github.com/stencila/thema/commit/6d58513e89cfe33a54246ef116c89853bef70a9c))
* **HTML:** Escape attributes for media objects ([964e63d](https://github.com/stencila/thema/commit/964e63def26b97a53b37b151724d7b9fada7bca6))
* **HTML:** Escape attributes when encoding ([adc8f5f](https://github.com/stencila/thema/commit/adc8f5fa0053e3dc336a8fc329651c0650f43e60))
* **HTML:** Escape strings ([e17d0a3](https://github.com/stencila/thema/commit/e17d0a394a09fe5c4d99d46c9746a7b757c8807c))
* **HTML:** Fixes to list and table encoding for compatability with address resolving algorithm ([a57d4b0](https://github.com/stencila/thema/commit/a57d4b0f2fa67f616e8b6a1e92485fb14dbd1985))
* **HTML:** Handle inline list item content ([d96d4ed](https://github.com/stencila/thema/commit/d96d4edc703552184258c066859db78ace298093))
* **HTML:** Ignore empty text when decoding ([92dbbd6](https://github.com/stencila/thema/commit/92dbbd61229f503fb224f6ff83221966496a8dde))
* **HTML:** Only use data-itemscope once during encoding ([be7930b](https://github.com/stencila/thema/commit/be7930b9c9aa4fe1697c53d67c061213c202b526))
* **HTML:** Remove backslash from Cite ([024eaf3](https://github.com/stencila/thema/commit/024eaf3d1ded21f206e882d86985f0c379f38a47))
* **HTML:** Reserve h1 for document title ([c7ef80a](https://github.com/stencila/thema/commit/c7ef80afb4a56f4c145db2bb938f66a877b65b20))
* **HTML:** Use consistent attribute name for programming language ([f9dbfb9](https://github.com/stencila/thema/commit/f9dbfb9888b438b915119d31bdb8db0319a35461))
* **HTML & Markdown:** Support encoding and decoding of quote blocks ([55b3e78](https://github.com/stencila/thema/commit/55b3e781a12c44c11d14bbf568e5b905ca0b7d88))
* **HTML encoding:** Use an ordered map to avoid re-ording of affiliations ([7cc1dea](https://github.com/stencila/thema/commit/7cc1deaa8aa78293cba3e43bc0b2c0e30bb2b0ac))
* **HTML encoding:** Use both class attribute and `meta` element for code language ([bba2864](https://github.com/stencila/thema/commit/bba28649b86f4a9134d08536282b5766fca3e313))
* **HTML Encoding:** Fix `CodeExpression` output ([c839560](https://github.com/stencila/thema/commit/c8395604b81ba029d326af3c0583fd49d07f3960))
* **HTML Encoding:** Use attributes that are consistent with themes ([a0cbc9f](https://github.com/stencila/thema/commit/a0cbc9f8c5f5c1c2cf62b0d9d48ff518be8fcfc2))
* **Icons:** Fix rendering of icon components ([5e772c4](https://github.com/stencila/thema/commit/5e772c4c3a32f90929b2cb8853f12226fe513d7c))
* **Install:** Allow for latest and location to be specified; use in Docker image ([d65b52e](https://github.com/stencila/thema/commit/d65b52e481056b1b40eaaaebe2290c0290a5bc25))
* **Interact:** Add welcome message ([aa6c7ad](https://github.com/stencila/thema/commit/aa6c7ad6de352f82c6e9002c07d1b81ccbce8c27))
* **Interact:** Do not drop last line of help ([c13824b](https://github.com/stencila/thema/commit/c13824b53524551573d83d80e71b5b05b5f05c93))
* **IPYNB Encoding:** Encode article metadata ([0712026](https://github.com/stencila/thema/commit/071202659d1645e284c5fbb2ff98f2823f4b9b6b))
* **IPYNB Encoding:** Encode image outputs ([00e3da2](https://github.com/stencila/thema/commit/00e3da2ebdb73eae57a46391e1bb3a2bbf977edd))
* **IPYNB Encoding:** Indent using one space ([57bd63f](https://github.com/stencila/thema/commit/57bd63f8b122ea9f73aac9cfe9ade3b2f88133a6))
* **JSON Schemas:** Improves JSON Schema generation: ([81ecd0f](https://github.com/stencila/thema/commit/81ecd0fa91cea487424432cd8a71759be12e4886))
* **JSON-RPC:** Use correct code for invalid params error ([e4d6650](https://github.com/stencila/thema/commit/e4d6650a7ded284dac6b3c4caf0c5e82b8fff763))
* **Kernels:** Error if no matching language is found ([8e1959a](https://github.com/stencila/thema/commit/8e1959a62572b6fcba609f05caafbca465386386))
* **Launcher:** Fix project directory name being clipped vertically ([561d197](https://github.com/stencila/thema/commit/561d1977a6f5f709d7fc38de1e7c77b521260320))
* **Load plugin:** Ignore plugin method if invalid schema ([fde35e6](https://github.com/stencila/thema/commit/fde35e6c60c7c7feebd14d3075021fd986dda8d7))
* **Logging:** Improve formatting of plain and filter levels properly ([63e80cb](https://github.com/stencila/thema/commit/63e80cb10de59267cabfc4f05fa822a80c2a8313))
* **Logging:** Initialize a temporary subscriber as soon as possible ([4c1ff46](https://github.com/stencila/thema/commit/4c1ff463707c1e971796c2087345c9c1610d180d))
* **Logging:** Only include log entries from this crate ([e5c0347](https://github.com/stencila/thema/commit/e5c034733832c2207711dad248413c8b66956d0a))
* **Logging:** Remove trace level ([ca5d829](https://github.com/stencila/thema/commit/ca5d8292f097b2a12c5c4b1b11ebbc402a886e35))
* **Logging:** Update and configure logga ([4c784cb](https://github.com/stencila/thema/commit/4c784cbc011d07e68e5b2528a09b639c3698d6b9))
* **Logging & Config:** Make config properties optional ([b3fa8ae](https://github.com/stencila/thema/commit/b3fa8aeb4929f0a607253dc2a12166e1edc44426))
* **Makdown decoding:** Use title and caption ([ca46470](https://github.com/stencila/thema/commit/ca464708bb759866d99efdba359406c4e6d7874a))
* **Markdown:** Add parsing of YAML frontmatter ([8716dbd](https://github.com/stencila/thema/commit/8716dbda07a3c55475d0ffa694984619247566b4))
* **Markdown:** Decode media object content ([8dc5191](https://github.com/stencila/thema/commit/8dc51914362e2300bff245e6363cfcfc32443d5f))
* **Markdown:** Differentiate media files; trim code block text; improve subscript parsing ([1be17c4](https://github.com/stencila/thema/commit/1be17c4aeb0f60bed4e964f6a14a4fee7a90ba73))
* **Markdown:** Fix handling of inline HTML elements ([a385f1d](https://github.com/stencila/thema/commit/a385f1d18f0bb74b56bb0f215fa420d0efda376b))
* **Markdown:** Improve decoding of YAML frontmatter ([2495384](https://github.com/stencila/thema/commit/2495384635afb48d5e0135f3b9d8402fa655f3c1))
* **Markdown:** Improve encoding of lists ([4e11257](https://github.com/stencila/thema/commit/4e112576c435d306454575f02d281c39defb585f))
* **Markdown:** Remove dollar-brace code expression syntax due to clash with math syntax ([a17580b](https://github.com/stencila/thema/commit/a17580b1bb7a1bfaa5ac64d3710bf7c978ba8dfa))
* **Markdown & IPYNB:** Allow default language to be supplied ([64229e5](https://github.com/stencila/thema/commit/64229e5b85c42008ba906ab274ecac3026f5310d))
* **Markdown citations:** Allow for varying spaces around separator ([ac948b4](https://github.com/stencila/thema/commit/ac948b4da2dd95505cdb0c4466ebc3e33f9300d8))
* **Markdown citations:** Do not consume @ character ([c47540c](https://github.com/stencila/thema/commit/c47540c239c12e472c6c9631ec91907e8d410770))
* **Markdown code blocks:** Fix decoding ([b87af96](https://github.com/stencila/thema/commit/b87af96faa7d3ab0e54e8cb0fda9118c901d90e5))
* **Markdown decoding:** Handle code chunks and expressions ([c158436](https://github.com/stencila/thema/commit/c15843687a9ccb943ca67e10368f4a235af937f9))
* **Markdown decoding:** Trim code chunk language ([d5a4763](https://github.com/stencila/thema/commit/d5a476323316aa2943db42a3bf0e87438690d2eb))
* **Markdown links:** Handle no title correctly ([0a5d56b](https://github.com/stencila/thema/commit/0a5d56bf78cce9055d19e268cd697eb0fc6fbb73))
* **Markdown, HTML, Pandoc:** Handle table headers ([adc92a0](https://github.com/stencila/thema/commit/adc92a0b9bc024c73be203f4569f11d9d64bf891))
* **Menu:** Re-add "Save" menu item to Project windows ([5bf0ffe](https://github.com/stencila/thema/commit/5bf0ffebf2ce925c2ab35c0557292ec87330f2d6))
* **Node bindings:** Use oneOf instead of anyOf ([a2e0d81](https://github.com/stencila/thema/commit/a2e0d8156edfd267a9f58af3fac2f728f90af368))
* **Node.js:** Add message to error types; update all types ([f7f53ff](https://github.com/stencila/thema/commit/f7f53ffc2321faade200d4bb0daa379a70134cfd))
* **Node.js:** Improve document type ([1c0ea25](https://github.com/stencila/thema/commit/1c0ea250ba03fb2c87092e73ff8dbd375e84c486))
* **Onboarding:** Don't create new Onboarding window if it exists already ([57a2f5b](https://github.com/stencila/thema/commit/57a2f5bdffb9c8cd4434439e2fefc16111d019b1))
* **Onboarding:** Fix bug preventing progressing to next steps ([27c4711](https://github.com/stencila/thema/commit/27c471150ea51a3416feabfd0d69a46acadde3e7))
* **Open:** Open project or document in browser ([705c8d8](https://github.com/stencila/thema/commit/705c8d8641f56c5b07cb847ef86b20e0baed6feb))
* **Package:** Update dependencies and refactor accordingly ([49fffc2](https://github.com/stencila/thema/commit/49fffc21826126f744529b3ed5af0bdbc8a04c76))
* **Packaging:** Fix to libary inclusion in macOS build ([4a8627e](https://github.com/stencila/thema/commit/4a8627e73d8eb8956c298b6d348bb064f277a42e))
* **Pandoc:** Differentiate media type when decoding images ([5013f9a](https://github.com/stencila/thema/commit/5013f9a7a2e8af1cd5b99ee87182d92d66b4a27c))
* **Pandoc:** Encode code chunk programming language ([fecd60b](https://github.com/stencila/thema/commit/fecd60bb449569156ce691db707856cd8c96dc8a))
* **Pandoc decode:** Use title and caption ([f9fb2ec](https://github.com/stencila/thema/commit/f9fb2ec79657fa2e52b388b70feb295cf002aed8))
* **Pandoc decoding:** Also check for node URL when decoding ([8873697](https://github.com/stencila/thema/commit/887369707334cd1bcdacbbb37f12de6a2d746540))
* **Patches:** Add `cast_value` method ([2dc13ed](https://github.com/stencila/thema/commit/2dc13edeb5fe7f1250d0fece0f0a7642c9d7975c))
* **Patches:** Add `DeserializeOwned` bound to avoid manual`from_value` overrides; fix tests ([5c0cd10](https://github.com/stencila/thema/commit/5c0cd1074f7a47d4df10fa3330abc11256972a29))
* **Patches:** Allow single item values for vectors ([a2a5558](https://github.com/stencila/thema/commit/a2a5558d2561cff226ab6e7e529e94e5392a3c9f))
* **Patches:** Ensure case conversion of property names in addresses ([227202b](https://github.com/stencila/thema/commit/227202bba0002de8c05fd75dd545ad6ee96ca593)), closes [#1213](https://github.com/stencila/thema/issues/1213)
* **Patches:** Fix handling of already boxed values ([6820881](https://github.com/stencila/thema/commit/6820881a4a869b94f7e97529523e49907ca609c5))
* **Patches:** Handle single item values ([b8ffeda](https://github.com/stencila/thema/commit/b8ffedad4478a3a981f353c3d25184c35d5e58f2))
* **Patches:** Include type name of structs in hash ([28d410f](https://github.com/stencila/thema/commit/28d410fd31dcdabb7bb65c96579f08ee5e4be6a4))
* **Patches:** Serialization of value to JSON ([61523cb](https://github.com/stencila/thema/commit/61523cb02ef83563b297dbf3f0bc92b31cf39091))
* **Plain text:** Encode with newlines between blocks ([d57018a](https://github.com/stencila/thema/commit/d57018a8dc21c3a2e75202fc4e9fee456cbdc02e))
* **Plain text:** Trim whitespace ([7a888ea](https://github.com/stencila/thema/commit/7a888eaa916da9eec7719205cac58851eff9227c))
* **Plugins:** Add list_plugins with aliases; allow no confirm ([af0efac](https://github.com/stencila/thema/commit/af0efac1a31d6e4b6e50ece8230b6fa763f5ef4d))
* **Plugins:** Adjust for upgrade to semver v1 ([15e0112](https://github.com/stencila/thema/commit/15e011220e224b8ff8938caf7c04cc9881ea9d2b))
* **Plugins:** Avoid warning about missing package.json on NPM install ([c6d4256](https://github.com/stencila/thema/commit/c6d4256d017b5cd942ceb5f298e5cfd6a0e30e79))
* **Plugins:** Display using and with aliases ([1cff1fa](https://github.com/stencila/thema/commit/1cff1fa6ff7d24e31919391a7ec3e65052cecdeb))
* **Plugins:** Do not attempt to upgrade linked plugins ([f2450e1](https://github.com/stencila/thema/commit/f2450e1a395f4b07cb211363abb6b4a44bc792c8))
* **Plugins:** Do not overwrite the manifest of the installed version ([4bcaa34](https://github.com/stencila/thema/commit/4bcaa34dd804d9f91675407e247e285c14def797)), closes [#1050](https://github.com/stencila/thema/issues/1050)
* **Plugins:** Ensure global aliases are merged with local aliases ([93112b9](https://github.com/stencila/thema/commit/93112b9e5efe85a708adf8a32dfbf8999e9265b9))
* **Plugins:** Ensure that not using an empty string for current version ([ad59c16](https://github.com/stencila/thema/commit/ad59c168ee6e8cfe00884aa4b761609c4577641b))
* **Plugins:** Error on bad status and log as warning ([d69283d](https://github.com/stencila/thema/commit/d69283d1212740990b31fda84fb30aaca865175c))
* **Plugins:** Fix rendering of available plugins ([fa4bc79](https://github.com/stencila/thema/commit/fa4bc79cecb2488032c5e581f8b1227d00a712a3))
* **Plugins:** Get latest manifest before attempting install ([af1e624](https://github.com/stencila/thema/commit/af1e62440e273f1ff6abe65f26860e1bd4014653))
* **Plugins:** Handle alternative plugin states when upgrading ([b109818](https://github.com/stencila/thema/commit/b10981896f52e09dfda859e4294ae4c661607160))
* **Plugins:** Make image optional ([182bbcd](https://github.com/stencila/thema/commit/182bbcd00f819012fffd0ef249733bb1db72a506))
* **Plugins:** Make updates when plugin is refreshed ([a429629](https://github.com/stencila/thema/commit/a4296296eb19eb18cc08657e811c05200fac6358))
* **Plugins:** Necessary changes for upgraded `jsonschema` Rust crate ([80241d4](https://github.com/stencila/thema/commit/80241d43b59b568e5f1ff15fd03701eeb4877305))
* **Plugins:** Only show next if there is one ([cf41d74](https://github.com/stencila/thema/commit/cf41d74382ed17b17b88e9eb141e399b48d0fe44))
* **Plugins:** Only upgrade plugins that are currently installed ([f63af68](https://github.com/stencila/thema/commit/f63af68bb04a413515c0531fb3551e2fdb0f96cc))
* **Plugins:** Pass store into functions to call add/remove ([684e6b0](https://github.com/stencila/thema/commit/684e6b0f40129f7fef605390ab671c57d601a960))
* **Plugins:** Print message when no plugins are installed ([b7535b2](https://github.com/stencila/thema/commit/b7535b2675b427d491d0eff2ec86897aee41847d))
* **Plugins:** Remove Docker container when collecting plugin manifest ([ee488ef](https://github.com/stencila/thema/commit/ee488efa60480fbe85e3290f1ef38fa08a1a0e27))
* **Plugins:** Replace plugin folders when installing as package ([a184f00](https://github.com/stencila/thema/commit/a184f009fa0f63002706d7d9fe9fef1a7d189ea4))
* **Plugins:** Return error rather than logging ([b5278e1](https://github.com/stencila/thema/commit/b5278e1e3f0ae1945e271d8ce935808698f0954b))
* **Plugins:** Show blank when not installed ([0c5c60e](https://github.com/stencila/thema/commit/0c5c60e54408ab05d52f54f5ec09a1ab0dc7fa5b))
* **Plugins:** Show registered and installed in list ([db39e48](https://github.com/stencila/thema/commit/db39e48ce35928c9b6401f6cb1724d5e77bafdf4))
* **Plugins:** Sort list by alias ([670bd9d](https://github.com/stencila/thema/commit/670bd9df2ff65c68fa4e31c7dd4ed0e6f752d133))
* **PNG encoding:** Return early if possible ([6cd52a9](https://github.com/stencila/thema/commit/6cd52a905e916b381df325aa1ca2e91ba06a325c))
* **Preview:** Add horizontal padding to preview panel ([65532a5](https://github.com/stencila/thema/commit/65532a581d6c32cdcd8f9d4e5cbee5f7479665f7))
* **Preview:** Fix scrolling of preview pane contents ([7fcf7eb](https://github.com/stencila/thema/commit/7fcf7eb4e819a77ceef2943cbee373c2b9131076))
* **Previews:** Regenerate Document preview when altering format ([44f3a87](https://github.com/stencila/thema/commit/44f3a87af4dc8c9820ca13e088de02d5b0f2edc5))
* **Project files:** Refresh name and format and remove old path from parent when renaming a file or folder ([69546e3](https://github.com/stencila/thema/commit/69546e3395df26568477a828a5e1d3fa5ace3d6f))
* **Project graphs:** Always add the main file ([755c12c](https://github.com/stencila/thema/commit/755c12ca3aaa9061f47399ae7affff4dd5900e33))
* **Project graphs:** Avoid cycles when walking over files ([cd7441a](https://github.com/stencila/thema/commit/cd7441a7becfb521b4d2440e4b7ec09cdad0307a))
* **Project graphs:** Improve DOT visualizations ([dae57f3](https://github.com/stencila/thema/commit/dae57f3442a6e8f5db3146b6b2d914ef6701ccec))
* **Project graphs:** Remove the project file path prefix when serializing ([72d26ba](https://github.com/stencila/thema/commit/72d26ba994d7668b3358bc3bd5dffab250f74179))
* **Project graphs:** Use absolute paths for resources ([eca490c](https://github.com/stencila/thema/commit/eca490ce9e603f17724a4836ccdaf5de84215445))
* **Projects:** Canonicalize the main path of a project ([b575478](https://github.com/stencila/thema/commit/b575478017f8b4bd78c34fb7739c368b95bba306))
* **Projects:** Do not walk over subject in triple ([f4b0112](https://github.com/stencila/thema/commit/f4b011258a82e85ae363adb50fd525349c3e2135))
* **Projects:** Generate type for file events ([ee4e69e](https://github.com/stencila/thema/commit/ee4e69e7309724c77acc05b90281c03652fd27b6))
* **Projects:** Make projects async to avoid try_lock ([fdb464c](https://github.com/stencila/thema/commit/fdb464c609cfe4b1d011aa769c8025bf79bd3969))
* **Pubsub:** Make publish "fire and forget" ([ed10073](https://github.com/stencila/thema/commit/ed10073c276b2c5bccb7e6b243161fd480d750a7))
* **Python and Javascript code analysis:** Enable ranges ([761a1f8](https://github.com/stencila/thema/commit/761a1f8cf4473e0bae84ccd19e9468961407c2ca))
* **R and Python code analysis:** Capture ranges for reads, writes and imports ([978a2d3](https://github.com/stencila/thema/commit/978a2d36b538acb34b79cd541f0f64ac40ee21bc))
* **R code analysis:** Ignore attributes ([19870da](https://github.com/stencila/thema/commit/19870da23e6b2e53b76dfc6e900afcc0603064dd))
* **R code analysis:** Use correct function name ([c71dbcb](https://github.com/stencila/thema/commit/c71dbcb0aadff7ac87dfa36a161b8eece61a4d25))
* **R markdown:** Handling of specific format for code chunks and expressions ([9975b42](https://github.com/stencila/thema/commit/9975b42087a997d83752cd6d8041d2994b28dd0b))
* **R Markdown:** Implement encoding ([b7cb681](https://github.com/stencila/thema/commit/b7cb681cf946b5b8960bbf60c69a06f95daa74cc))
* **Release:** Enable notarization for MacOS ([28decee](https://github.com/stencila/thema/commit/28decee90b974a95cbabf816f266ebeb49aab288))
* **Release:** Publish the correct file for Linux ([ec958c8](https://github.com/stencila/thema/commit/ec958c8ed92d6bb9cb9897b96a8b0ac19c0cc099))
* **Release:** Set the exe config option under Windows ([99d7ffe](https://github.com/stencila/thema/commit/99d7ffec1c3360891d291e1e745a8800dd809047))
* **Release:** Use asset name when calling upload script ([c813e76](https://github.com/stencila/thema/commit/c813e768b8d89d5dae66858b92548144ac1b69cb))
* **Release:** Use UPLOAD_PATH; use set -e on CI ([225d525](https://github.com/stencila/thema/commit/225d525c2309ece08fe0c0bbc2628b2ca1ba9a38))
* **Releases:** Use 7z instead of archive task ([a54d005](https://github.com/stencila/thema/commit/a54d005a19485f327094fac30a2acc70eef9dca9))
* **Reshape:** Add ampersand to separators ([88f561b](https://github.com/stencila/thema/commit/88f561b77d5a1709294d3eaec8b1e0095e2af8bb))
* **Routing:** Avoid resolving client-side routes as filepaths ([41408be](https://github.com/stencila/thema/commit/41408beebac03e7770d36915c20f30448cc5bcd8))
* **RPC:** Use error data arg ([66069e1](https://github.com/stencila/thema/commit/66069e1df6cb6f12b2db451f092d274c0493ebc5))
* **Rust:** Improve error message when no matching document ([40b28cd](https://github.com/stencila/thema/commit/40b28cdb62a4f444c4b77729bf2941ed466f57fa))
* **Rust:** Preserve order on JSON maps ([7eaff66](https://github.com/stencila/thema/commit/7eaff6665cb106d89c488e5ca45b5fd0be589c92))
* **Rust:** Republish patches to other subscribers ([a02b40e](https://github.com/stencila/thema/commit/a02b40e04e67a2de313ab00232fb587c6874959d))
* **Rust:** Update dependencies ([7e2dcf4](https://github.com/stencila/thema/commit/7e2dcf4519f63c4bebe8b2791c5212a5dd6108af))
* **Rust:** Update dependencies ([fdb032e](https://github.com/stencila/thema/commit/fdb032e4c476213b070feff0a5e89faa75d19237))
* **Rust:** Update Schema : new `Null` type and no `type_name` method ([fa78233](https://github.com/stencila/thema/commit/fa782338e08acbbb5e472dbcf72eea6de7f2278b))
* **Rust:** Update stencila-schema ([e59d3c5](https://github.com/stencila/thema/commit/e59d3c5bde75fb051f0aae277c4d4cdd84a1b151))
* **Rust:** Upgrade dependencies ([1587395](https://github.com/stencila/thema/commit/1587395a8c229b8339ffb914750683b754bba8c5))
* **Rust:** Upgrade pandoc-types ([5269f7f](https://github.com/stencila/thema/commit/5269f7fd31153f00972deacd1f584ebc26ae0f57))
* **Rust:** Upgrade Schema version ([301548c](https://github.com/stencila/thema/commit/301548c65acf109fa2193adc2486767e783f78d8))
* **Rust:** Upgrade Stencila Schema version ([7fa221e](https://github.com/stencila/thema/commit/7fa221e960b1dd301a7f23058c20778afe82994f))
* **Serve:** Check early that path is in current working directory ([9385f44](https://github.com/stencila/thema/commit/9385f44d38136d938a107fbec2c291284041dc47))
* **Serve:** Enclose rewritten path in double quotes ([9e4892e](https://github.com/stencila/thema/commit/9e4892eaa3766c57945763bdc1289302db451669))
* **Serve:** Return formats like Markdown as plain text ([d5355a6](https://github.com/stencila/thema/commit/d5355a63e745805a63ac8d19a7a9deb9beb87fc2))
* **Serve:** Serve local assets ([70a95ff](https://github.com/stencila/thema/commit/70a95ff3770e2c47d490ab5632a45802baeeefac))
* **Serve:** Update for API change to `rust-embed` ([d108850](https://github.com/stencila/thema/commit/d108850e2d7797839d0dd589830c7e4fc55ca1be))
* **Server:** Check and add option for run-as-root; add docs ([b4376d3](https://github.com/stencila/thema/commit/b4376d3221b41ca6372d56bced583ea156462e2a))
* **Server:** Handle disconnections ([0d1106d](https://github.com/stencila/thema/commit/0d1106d3dbceae285cf4c0c85b499a156d4279ec))
* **Server:** Improve error handling,; dedicated WebSocket path ([4a04b2f](https://github.com/stencila/thema/commit/4a04b2f629cb408bcc49a988c3f80af22bba7ae7))
* **Server:** Log errors on the server ([fe970d9](https://github.com/stencila/thema/commit/fe970d9fdb55a7a947265630382eee436f2180a5))
* **Server:** On;y run sudo check on systems where it is available ([e526cd7](https://github.com/stencila/thema/commit/e526cd7700ad14d22480e86f6bed56e8ba4af04c))
* **Server:** Startup web client on load ([410741a](https://github.com/stencila/thema/commit/410741ae8691c040272f1a8c91e8e99c167f5d65))
* **Server:** Warning when key is set on command line ([ad086d7](https://github.com/stencila/thema/commit/ad086d76098ffcc28352c0ded3c1f6ff11f2c4fc))
* **Serving:** Serve unknown file types as raw ([7d4e73c](https://github.com/stencila/thema/commit/7d4e73ceff15c1a1120ed935c723e497c235cf93))
* **Session:** Finer grained subscriptions ([b78cbdb](https://github.com/stencila/thema/commit/b78cbdbd98c960497a7fa0333a31df073a5880b2))
* **Settings:** Fix reloading of chosen syntax from user config store ([4705abf](https://github.com/stencila/thema/commit/4705abf6234d8dc03e6d420f8573c8670fa919f5))
* **Settings:** Path user config file with any missing default values ([ca8c43a](https://github.com/stencila/thema/commit/ca8c43a402f5285a4d10d8930f2326f9105f5c8c))
* **Settings:** Standardize spelling of settings items ([7fddc8e](https://github.com/stencila/thema/commit/7fddc8eb5ead1d68bd785e6b92839ddf9500c8f0))
* **Sidebar:** Fix spacing around file tree ([26d76af](https://github.com/stencila/thema/commit/26d76afeade9056d521d43af78bca4c598694a81))
* **String patches:** Ignore linter warning which broke tests ([eb50280](https://github.com/stencila/thema/commit/eb50280c1dc99452281174d74cb038e1f71e1c6e))
* **String patches:** Make unicode character aware ([2f122e4](https://github.com/stencila/thema/commit/2f122e438ba568ca50b46081df814bd7e12a6224))
* **String patches:** Remove move operations ([6ecaa15](https://github.com/stencila/thema/commit/6ecaa153502e83fa57272987e351b89eca247bea))
* **String patches:** Various fixes and generative testing ([7212a47](https://github.com/stencila/thema/commit/7212a474c88e22eef8c68dab9a59c2fb50419e0b))
* **Tabs:** Add visual feedback when hovering over tabs ([d8f67ee](https://github.com/stencila/thema/commit/d8f67eedbaf2e922884e0fac4b91a44b01d1f071))
* **Tabs:** Fix spacing around tab close icon on Linux & Windows ([cb0b9aa](https://github.com/stencila/thema/commit/cb0b9aa0eeacbefc4c83c5e8ea014ba697dd28b9))
* **Tabs:** Fix width distribution of document tabs ([4dcaedb](https://github.com/stencila/thema/commit/4dcaedbd92ff5643bb178bce2d453ed79038161a))
* **Tabs:** Improve visibility of active document tab ([f788409](https://github.com/stencila/thema/commit/f78840991efcc38e47de890278308af448f46822))
* **Types:** Fix CaptureError IPC call type signature ([3bcfff1](https://github.com/stencila/thema/commit/3bcfff1d5d87762f175b35c48788ca1676b0f9c0))
* **TYpings:** Allow override of property optionality ([ac24ef7](https://github.com/stencila/thema/commit/ac24ef734e88a0d606a19511ca58525cd23d8b9e))
* **Upgrade:** Use config settings only for automatic upgrades ([8c2c405](https://github.com/stencila/thema/commit/8c2c405967e3af6f188f866735801624c1f6f1bb))
* **Vector patches:** Apply transform operations ([0b06cbc](https://github.com/stencila/thema/commit/0b06cbcdff034415312962a1b9357e0363272167))
* **Vector patches:** Fix backwards moves ([0ba5262](https://github.com/stencila/thema/commit/0ba5262450b6cfbd5c2427151ddfb6b9951ccf2f))
* **Vector patches:** Fix issue when nested replacements ([23dcbf7](https://github.com/stencila/thema/commit/23dcbf7d5f9032dca7742fbc99688ea48e84dde2))
* **Vector patches:** Fix issue with indexing replacements ([01f1ca1](https://github.com/stencila/thema/commit/01f1ca11154726692cc17228f191323c2696c4b4))
* **Vector patches:** Only match add operations at top level ([844fe67](https://github.com/stencila/thema/commit/844fe678ea4c7bd3ff8de131b2a74e26a606b0ab))
* **Viewer:** Fallback URLs ([331b394](https://github.com/stencila/thema/commit/331b394fb433ca346e249929601290bbab299fac))
* **Viewer:** Implement more article content components ([ac66ec5](https://github.com/stencila/thema/commit/ac66ec506c4f295c2a7d62ea9abe3b31f3ae8eb7))
* **Viewer:** Use correct itemtypes ([968bbae](https://github.com/stencila/thema/commit/968bbae134ea13aabc70515c5fe031d890c6060e))
* **Web:** Client takes id ([b8e6fbf](https://github.com/stencila/thema/commit/b8e6fbffd76863039716b5370ff3c34aa0ff112e))
* **Web:** Exclude map files from embedding ([fd2ea89](https://github.com/stencila/thema/commit/fd2ea89adfb2a220ce90b2a42d0caa5d024fa5ef))
* **Web:** Implement move operation ([a58329b](https://github.com/stencila/thema/commit/a58329bd23597c062f3c8bc42b52a4e039dc5782))
* **Web:** Improve robustness of JSON patches ([921e881](https://github.com/stencila/thema/commit/921e881f95a1df849458f39b51bd4338b7bd62d9))
* **Web:** Make able to handle empty addresses for add and replace operations ([69b5f57](https://github.com/stencila/thema/commit/69b5f5787692979f471c7a7ebaba0e7c8e71da87))
* **Web:** Optimize browser bundle ([6938653](https://github.com/stencila/thema/commit/6938653a58e3f0fcf7eeab01393164f2aa363cc1))
* **Web:** Quote slot in error messages for improve readability ([2fb45d5](https://github.com/stencila/thema/commit/2fb45d59b09beeb32132700cf4746553fc08ca83))
* **Web:** Remove extra argument ([c5ce354](https://github.com/stencila/thema/commit/c5ce354af8887525d12dbb281a7ff655ee4a75c1))
* **Web:** Use diffing to generate patches ([7f25135](https://github.com/stencila/thema/commit/7f2513597842966ba5ee857904542f98a436bc53))
* **Web:** Use graphemes when applying string patch operations ([1d6f725](https://github.com/stencila/thema/commit/1d6f725fbc0ed1a66ff4e122bfee079ac4bf94d5))
* **Web patches:** Add JSON diffing ([41ab4b0](https://github.com/stencila/thema/commit/41ab4b0bc8bbc66b2f7331debfc7d58b9b27256f))
* **Web patches:** Allow for empty paragraphs ([b118e36](https://github.com/stencila/thema/commit/b118e3664b5b4d37064f593e952d1ee59374dd7e))
* **Web patches:** Check for deep equality before returning replace ([3d62ee4](https://github.com/stencila/thema/commit/3d62ee4e5eaea0fafbebcc0ed945ad7d0e573fac))
* **Windows release:** Archive using task because zip not available ([49dabb6](https://github.com/stencila/thema/commit/49dabb65dba5521ba071f33611dd52c60d91480d))
* Correct the import for encoda ([5d61884](https://github.com/stencila/thema/commit/5d61884b4c343c87187ea02eaabdbe12f1334a71))
* Doing extract if node_modules does not exist ([6bb7919](https://github.com/stencila/thema/commit/6bb79198d16fa8eefcc6e1c30416dd4b333390bc))
* install.sh now works entirely inside /tmp directory ([70d9ace](https://github.com/stencila/thema/commit/70d9ace59207c0f5ebc5b5ed6dc9e2528461b14f))
* Removed semantic-release to NPM ([9fd1436](https://github.com/stencila/thema/commit/9fd1436bab85a35c5c8bee005e5b77f43e5df4d7))
* Update to encode 0.46.2 ([d0fd573](https://github.com/stencila/thema/commit/d0fd573a3ffff25c878f4d8fc9b810867de8f5c3))
* upgrade to @stencila/encode 0.42.0; refactor demos ([00e5b94](https://github.com/stencila/thema/commit/00e5b9462d045b8d43e7fa1a057fbd83c4aa64f5))


### Features

* **Arkdown:** Add decoding of tables ([d9d6f17](https://github.com/stencila/thema/commit/d9d6f172eeacfe3a934085dcfc6fbced1a4ea431))
* **Article editor:** Add support for code fragments and blocks ([3501e69](https://github.com/stencila/thema/commit/3501e69075c419f419088a5dfc82168b36a4d012))
* **Atomics patches:** Implement apply patch ([814e723](https://github.com/stencila/thema/commit/814e723256bac40b0b792998f87df10219902167))
* **Auto upgrade:** Do automatic upgrades with configurable frequency ([a4ed8bc](https://github.com/stencila/thema/commit/a4ed8bc489d7980d5fa7bd50a258b9c8f59747d2))
* **Binaries:** Add binaries module for locating, running and installing  third party binaries ([83d390c](https://github.com/stencila/thema/commit/83d390c950fab75fc63f391e3fcac3a383abd7d9))
* **Binaries:** Add configuration option to enable, or not, automatic installs; add require function ([e2cd4eb](https://github.com/stencila/thema/commit/e2cd4eb8a33bec8ffa29be662ebd30f0744eddb9))
* **Binaries:** Add installation for Python ([98b5bdf](https://github.com/stencila/thema/commit/98b5bdf916c72090eea99e244197777e00e79175))
* **Binaries:** Add uninstall command ([4069af3](https://github.com/stencila/thema/commit/4069af37c332757a5188809d13ac97dd020a89dc))
* **Cacl kernel:** Execute `calc` expressions and patch outputs ([022ab96](https://github.com/stencila/thema/commit/022ab96969df768e65736fb5c8d2e388c58c53dd))
* **Calc:** Add `calc` language ([46e8745](https://github.com/stencila/thema/commit/46e874541c27194cf27454fdf305f8d402e5c953))
* **CLI:** Add `convert` command ([4a1006c](https://github.com/stencila/thema/commit/4a1006c12f5f7ca132362a8bdfbdba6b56a6efc2))
* **CLI:** Add `with` command ([f1e1beb](https://github.com/stencila/thema/commit/f1e1beb4e3d96aee92005c70aa9f1423b640537b))
* **CLI:** Add close command ([1aa4365](https://github.com/stencila/thema/commit/1aa43653d9d44fe0ae9c8db2c7edc0d6daa77c90))
* **CLI:** Add convert command with watch option ([e67cb20](https://github.com/stencila/thema/commit/e67cb20ea589f40fd4d320e3aee79bc524cf0560))
* **CLI:** Add display of progress events ([f925b5f](https://github.com/stencila/thema/commit/f925b5fa694f94cd1f30dfca23a4907be6700826))
* **CLI:** Add log level and log format options ([67d87a7](https://github.com/stencila/thema/commit/67d87a71dce95eb99460a42df02ec2db770564c4))
* **CLI:** Add option for `convert` to stdout ([eae08fc](https://github.com/stencila/thema/commit/eae08fc1a9ebb4506ee3862244ec41c8035b599d))
* **CLI:** Add serve command ([5faeb3b](https://github.com/stencila/thema/commit/5faeb3b98cdd49a8a4a2d726254526b9daeb6c86))
* **CLI:** Add shortcuts to allow appending and truncating the command prefix ([22f3f26](https://github.com/stencila/thema/commit/22f3f2667b3c63cdf30882dac5f85b8bea90aedb))
* **CLI:** Add show command ([7507118](https://github.com/stencila/thema/commit/75071186220cc8e7238725477dcce7779c7584c4))
* **CLI:** Allow `documents show` to show `content` and `root` ([2f592bf](https://github.com/stencila/thema/commit/2f592bf83a7954359cbba6d29937e1fcb7e174a9))
* **CLI:** Allow alternative user specified formats for displaying results ([277bdf2](https://github.com/stencila/thema/commit/277bdf2057d2d73c46d598f55f2088f78d19292a))
* **CLI:** Highlight output in non-interactive mode ([0d39278](https://github.com/stencila/thema/commit/0d392782326fd0d82ff6a3f1de293ac7cb965d7b))
* **CLI:** Open viewer for documents ([a9bfa90](https://github.com/stencila/thema/commit/a9bfa90fc996e58d89e5d95c1e117a6f80bb24b6))
* **CLI:** Show coloured help ([62f8eb4](https://github.com/stencila/thema/commit/62f8eb49e2ba8e064e22215a38dd0e5e77845c02))
* **Code analysis:** Add ranges to relations ([f5b75b7](https://github.com/stencila/thema/commit/f5b75b7b13a71f1ce7578b966192b14f8b45d25c))
* **Code analysis:** Allow manual overrides using tags in comments ([8784e05](https://github.com/stencila/thema/commit/8784e05ac43c4a0003144272f0b0466c8983fc0f))
* **Code analysis:** Decode and compile entire source code files ([9707eef](https://github.com/stencila/thema/commit/9707eef281fd65eecfdb57e54b9755c8b2460817))
* **Code analysis:** Detect files read for JavaScript ([7a0bf41](https://github.com/stencila/thema/commit/7a0bf4177415adb598fabbf8b5f5d4a04d014f7f))
* **Code analysis:** Detect files read for Python and R ([60a0450](https://github.com/stencila/thema/commit/60a04506215625b45a18bf495137c109ed77d344))
* **Code analysis:** Detect files written in JavaScript, Python and R ([e9b25a7](https://github.com/stencila/thema/commit/e9b25a72e5280b6f07791f3564c3a68a89c11ba9))
* **Coerce:** Implement coerce method ([80bc2c7](https://github.com/stencila/thema/commit/80bc2c73fef6491d298e3137365b421dc0cafafa))
* **Compile:** Add code compilation for dependency analysis for CodeChunks etc ([cf55b6b](https://github.com/stencila/thema/commit/cf55b6b5c681cb4907094b6a760cd0a61bb29591))
* **Compile:** Identify all entity nodes ([950b1a2](https://github.com/stencila/thema/commit/950b1a2d2a3337a5172b8be4da44724c00656e89))
* **Config:** Add config command ([2ab9fbe](https://github.com/stencila/thema/commit/2ab9fbe5393cafa2cfaf66d2e618fdf883e24e9d))
* **Config:** Add config settings for editors ([9106e25](https://github.com/stencila/thema/commit/9106e25aacb14ac46e0d5f917b15e2ff1cf84774))
* **Config:** Add validation of config ([62a5a9b](https://github.com/stencila/thema/commit/62a5a9b904cbd919a8e226120756d2e274bccc73))
* **Config:** Expose validate function ([be02573](https://github.com/stencila/thema/commit/be025735785b7b943fc1d20ff44792d99fa8a6f5))
* **Config:** Generate JSOn Schema and expose on CLI and in Node.js bindings ([7869a92](https://github.com/stencila/thema/commit/7869a9208ea65225202d6d240b5851ad716a6028))
* **Config:** Get, set and reset config using TOML ([af7b626](https://github.com/stencila/thema/commit/af7b6269f5cd39602439a970515906b463fc97f8))
* **Config:** Publish events when config is set or reset ([62ab17a](https://github.com/stencila/thema/commit/62ab17a958b671e55ada33b2b8fcce8c2c709d63))
* **Config:** Return display result ([b4999df](https://github.com/stencila/thema/commit/b4999df5d0071cb4fbbbb5ffadd3faed15ca4497))
* **Convert:** Upgrade Encoda, allow for multiple convert output files ([d299320](https://github.com/stencila/thema/commit/d2993204d5904b0aa807e1c584e6975717496fd3))
* **Custom errors:** Define custom error types and publish them under the "errors" topic ([d0c6978](https://github.com/stencila/thema/commit/d0c69782b1deea79ad3e23f59dc6a552da947df7))
* **Decode Markdown:** Handle inline content extensions e.g. math, citations ([78ba852](https://github.com/stencila/thema/commit/78ba8521912ea961d9fdcdb41ca721e5f434fbec))
* **Dependency graphs:** Include variable and function dependencies for R; visualization for projects ([652101d](https://github.com/stencila/thema/commit/652101d0c98d055f85126b403b1cbe4f5e4255e9))
* **Deps:** Upgrade Encoda to 0.75.4 ([1528d09](https://github.com/stencila/thema/commit/1528d09bd17c6bc23333e64171895abf68fa6f42))
* **Desktop:** Add ability to check for plugin updates ([45fd4b0](https://github.com/stencila/thema/commit/45fd4b00f6259d23bba6804ef548e53480ff4250))
* **Desktop:** Add ability to create new empty documents ([7deb8b1](https://github.com/stencila/thema/commit/7deb8b101bb8a1d4eb70e14439b0f31d99b2e93a))
* **Desktop:** Add ability to manage plugin installations ([1969153](https://github.com/stencila/thema/commit/196915379a3719bfb8d46b54eb2c271cc87c287c))
* **Desktop:** Add ability to open project folder from menu item ([51f1730](https://github.com/stencila/thema/commit/51f1730a510d0403e891ffd068c46c0bb776a2f6))
* **Desktop:** Add ability to view session logs in app ([bea03bb](https://github.com/stencila/thema/commit/bea03bbcbc081c941715de4d559e76ba0dad1e15))
* **Desktop:** Add basic support styling previews with project themes ([d2e06d8](https://github.com/stencila/thema/commit/d2e06d81fcf6305fdafe023b763185e6dd414962))
* **Desktop:** Add collapsible folders to the file tree sidebar ([8a16343](https://github.com/stencila/thema/commit/8a163431d6022359db53ffb72c6578f97dc560ae))
* **Desktop:** Add custom scrollbar styles ([9df42dd](https://github.com/stencila/thema/commit/9df42dd34c91296076e8b404dc77579dc3bf8662))
* **Desktop:** Add document state indicator icon to tabs ([3b5a571](https://github.com/stencila/thema/commit/3b5a5717436652b1576d12a9ca417d4d3f4861e9))
* **Desktop:** Add empty state message for new Project windows ([f9bc0ea](https://github.com/stencila/thema/commit/f9bc0eaba2a6ec61d4c6747009330674173c8c52))
* **Desktop:** Add first-launch onboarding flow ([1afa693](https://github.com/stencila/thema/commit/1afa6939dfc62fd81f3db1b4bbe4f0bd087d9280))
* **Desktop:** Add keyboard shortcut for closing active tab ([fa09b54](https://github.com/stencila/thema/commit/fa09b540f20c936bc47f78694b1392dc6d76ce9f))
* **Desktop:** Add prompt to auto-updating the Desktop client ([6f30c83](https://github.com/stencila/thema/commit/6f30c8309dd204adb21431cf1403b1924ebf95f2)), closes [#933](https://github.com/stencila/thema/issues/933)
* **Desktop:** Add Settings window router ([65e9ca0](https://github.com/stencila/thema/commit/65e9ca0c69194f32d254c253b4dcbfa5f4c268d0))
* **Desktop:** Add shortcut for opening project launcher ([03d8137](https://github.com/stencila/thema/commit/03d81376a9e4240aa5d93e2c50e1fda8c8e2e79e))
* **Desktop:** Add sidebar nav to Project window ([87b8896](https://github.com/stencila/thema/commit/87b88961877695a6af314fae397988a9a1ac5ff5))
* **Desktop:** Add Stencila CLI as a dependency ([ac3e30d](https://github.com/stencila/thema/commit/ac3e30d9fe16058393d636b5dee4627e2737a81e))
* **Desktop:** Allow resizing panes using entire height of right border ([c078a91](https://github.com/stencila/thema/commit/c078a913c9100a82bd74c3ea2f5abfa34a2e292d))
* **Desktop:** Bootstrap client using electron-forge ([12c5099](https://github.com/stencila/thema/commit/12c5099e90cc61c06dc34837f6bec67c443f94e0))
* **Desktop:** Enable "New Project" workflow ([431f3c5](https://github.com/stencila/thema/commit/431f3c56ae2645d264875c77ccc39f896e5946c4))
* **Desktop:** Harden security based on best practices ([a210883](https://github.com/stencila/thema/commit/a210883884c92851c2f5c0340756729c93aa00d2))
* **Desktop:** Highlight project main file in file tree ([26ef357](https://github.com/stencila/thema/commit/26ef357a388d38ed71e9d92189368fba2b8b5c40))
* **Desktop:** If project has main file, open it on project launch ([705b894](https://github.com/stencila/thema/commit/705b8944df788f1fdd6b2a364f527e97284f4dd4))
* **Desktop:** Initial foundation for adding settings views ([81d7a09](https://github.com/stencila/thema/commit/81d7a090b2396db4f4dd3519c4a37386eb5a0e02))
* **Desktop:** Keep document history for each document ([77fcd7d](https://github.com/stencila/thema/commit/77fcd7dcaf1210c5849ec895c2d5e030d5665e81))
* **Desktop:** Only show editor panel for editable documents ([725bb46](https://github.com/stencila/thema/commit/725bb46e9a0cc958dcaae561418aec7da7124c09))
* **Desktop:** Open files in separate tabs ([7ff3114](https://github.com/stencila/thema/commit/7ff31149a6de2b3f6f71177b33ee8dee27d13175))
* **Desktop:** Print app version in Launcher window ([f3b3d61](https://github.com/stencila/thema/commit/f3b3d61c5a0492fee3236c7f44d639cf224f58d9))
* **Desktop:** Set customized window title for different views ([c1dfdf1](https://github.com/stencila/thema/commit/c1dfdf124becb507255c2055b7f5eb96faf80ceb))
* **Desktop:** Support saving document changes to disk ([ea76aec](https://github.com/stencila/thema/commit/ea76aecbab3dcac0d30a0363eb0d9689d2d6c85e))
* **Desktop:** Surface errors to users as notifications ([04e42df](https://github.com/stencila/thema/commit/04e42df3489e44e278370181eed728a24eea9049))
* **Docker images:** Add initial versions ([ff12ab9](https://github.com/stencila/thema/commit/ff12ab97ec2df6c58ec254efcafc117966c33de7))
* **Docs:** Add a link to help make documentation better ([6caf76a](https://github.com/stencila/thema/commit/6caf76a2e677a976be1f32a0cb93a807b68da8d9))
* **Docs:** Add Asciicasts player component ([d95db64](https://github.com/stencila/thema/commit/d95db6434bc5014595dcafa94a3637384c39f9ee))
* **Docs:** Terminate Documentatino build in case of errors ([d09d2cb](https://github.com/stencila/thema/commit/d09d2cbfed67bee7561a8a72a899983411b91523))
* **Document diffs:** Generate unified diffs in alternative formats ([f378a06](https://github.com/stencila/thema/commit/f378a063eb07d60cb5d05d76a46bfa98b801e07a))
* **Document Tabs:** Adjust position of close icon based on user OS ([45969c0](https://github.com/stencila/thema/commit/45969c0b240c78f5d2f43d3cefc50ee23b42aae3))
* **Documents:** Add "Save as…" functionality to Desktop ([c8c3daa](https://github.com/stencila/thema/commit/c8c3daa51269d7b8f22597224a1452c0344e8bf6))
* **Documents:** Add ability to query documents using JSON Pointer or JMESPath ([40e7158](https://github.com/stencila/thema/commit/40e7158f7511e2ef961667eeda2ed0dbeae54ce2))
* **Documents:** Add additional Document call IPC handlers to Desktop ([48154e2](https://github.com/stencila/thema/commit/48154e2a67566d2e53bca17ec8abb53b7cf14080))
* **Documents:** Add compile method ([fb06a21](https://github.com/stencila/thema/commit/fb06a211e0c069bd3b4175d63deaf3b76fdbc877))
* **Documents:** Add documents modules to Rust and Node ([b5bfc93](https://github.com/stencila/thema/commit/b5bfc93cfe8c171f88a8b52b9f190aa349439829))
* **Documents:** Add execute command ([8d213dd](https://github.com/stencila/thema/commit/8d213ddfc10effefee285fcfc4c2873bf26e32f1))
* **Documents:** Add function to create a new empty document ([1dbce29](https://github.com/stencila/thema/commit/1dbce2931c61b2ee5d923fcfb213e598a9d9be50))
* **Documents:** Add resolve and find functions ([26bb387](https://github.com/stencila/thema/commit/26bb387435629b2b32af5cf15690d8f7a781d58d))
* **Documents:** Add sepate subscription topics ([fe3563f](https://github.com/stencila/thema/commit/fe3563f8192fa659995fd8f9d2eb2cdfd86e7074))
* **Documents:** Allow alteration of path and format of a document ([ef420aa](https://github.com/stencila/thema/commit/ef420aa81c8613e46d22154323c8d382f5f1cf4b))
* **Documents:** Allow media objects to be opended as documents ([ffadd64](https://github.com/stencila/thema/commit/ffadd646f31b60c2a8c843952a29ea4c0f87a9a1))
* **Documents:** Get the SHA-256 of a document ([d65939c](https://github.com/stencila/thema/commit/d65939c26f35f0e590613c37bc117a1057e80103))
* **Documents:** Published `patched` events when documented is updated ([77f5778](https://github.com/stencila/thema/commit/77f577885d5d9a4dd499c903b865199cf9477eaa))
* **DOCX & LaTeX:** Add decoding of Microsoft Word and LaTeX via Pandoc ([0b1da91](https://github.com/stencila/thema/commit/0b1da9116f8fbe2720c8a92a8b048dd1daa31b6a))
* **Editor:** Add basic WYSIWYG editor menu ([39dd2f9](https://github.com/stencila/thema/commit/39dd2f91a44c75be3ffeb07da8e07e2d8e111483)), closes [#1200](https://github.com/stencila/thema/issues/1200)
* **Editor:** Add keyboard shortcuts for cycling between document tabs ([dc714c6](https://github.com/stencila/thema/commit/dc714c689ce67f0aee054f40fbe454d64b588ddb))
* **Editor:** Expose settings for toggling line wrapping & line numbers ([a7d2b77](https://github.com/stencila/thema/commit/a7d2b77bc7ce41cee768b1f97706436ca5006850))
* **Editor:** Render CodeBlocks in a stencila-editor component ([e0aaf93](https://github.com/stencila/thema/commit/e0aaf939a7822aa1283e225aad6fae6b4324d54f))
* **Editor:** Support setting CodeBlock language with Markdown syntax ([152b680](https://github.com/stencila/thema/commit/152b680db21f2fd37c59dc95115985c71d44cf29)), closes [#1211](https://github.com/stencila/thema/issues/1211)
* **Editor:** Toggle visibility of editor and preview sections ([3ddb7b6](https://github.com/stencila/thema/commit/3ddb7b6e4bfb544eb972ca798b79db933c98a0f2))
* **Editor:** Update internal Document format when changing language ([31168d4](https://github.com/stencila/thema/commit/31168d42a085bc1921c3a840fa4f73c3128f9ba9))
* **Elife:** Add eLife article source ([fcd34a5](https://github.com/stencila/thema/commit/fcd34a5cfbc968c8c34dda4c83d87f21a584fba8))
* **Encoding JSON:** Add option for compact or indented ([5ad37af](https://github.com/stencila/thema/commit/5ad37af9dd883d99bf05410480e52918e9c5bace))
* **Files:** Add custom icons for various file formats ([ca133c7](https://github.com/stencila/thema/commit/ca133c7fdd24cc4078cbe5535be133d4ba8df421))
* **Files:** Add file watching with publishing events ([7781645](https://github.com/stencila/thema/commit/7781645cad72d08abb46e666bb036c4966ad412c))
* **Files:** Add files to project properties ([7e52b57](https://github.com/stencila/thema/commit/7e52b57be6b1888e3b5749024256831068fa1c91))
* **Files:** Add format property and media type fallbacks ([287a732](https://github.com/stencila/thema/commit/287a73249598d6bac2071f8f94f7b0b0f3848afc))
* **Files:** Add modified and size properties ([5f78cb4](https://github.com/stencila/thema/commit/5f78cb442280e83503fbe121e5198341a9473a64))
* **Files:** Add more filetype icons ([3265995](https://github.com/stencila/thema/commit/3265995f15cd17c1c1abe18ea239fd8d12d62757))
* **Files:** Give directories their own format ([4cb509e](https://github.com/stencila/thema/commit/4cb509ecd74ed7d717a4d31c70bf31b35ed496d3))
* **Files:** Mirror file system changes in memory ([6f027c4](https://github.com/stencila/thema/commit/6f027c4c72b7cac33cafa3223ced9f10d95f6fcc))
* **Files:** Respect gitignore files including during watching ([7ca11bb](https://github.com/stencila/thema/commit/7ca11bb8321d597237c99661adf4fc7161de94aa))
* **Files Sidebar:** Show empty state when project contains no files ([eaac750](https://github.com/stencila/thema/commit/eaac7508afa10b325756427f9b406fcb1126e557))
* **Formats:** Add a known property to formats ([979c86c](https://github.com/stencila/thema/commit/979c86c6846b711f207b41fe96967662aa3a35ee))
* **Formats:** Add preview property ([b885e8d](https://github.com/stencila/thema/commit/b885e8da0c12c40323d5c9f65eec9b9bd02db008))
* **Formats:** Allow additional extensions for a format ([2c0ae5a](https://github.com/stencila/thema/commit/2c0ae5aaa67da4276744ace6dc2cf006e66d6528))
* **Graphs:** Add alternative visualization formats ([996296a](https://github.com/stencila/thema/commit/996296acb0b952785d35ca26afd5b83586bca09a))
* **Graphs:** Add UI for rendering Project Graph in Desktop client ([48ae974](https://github.com/stencila/thema/commit/48ae974b2f4bb2f9d00460c23adf23f7bf3eaa52))
* **HTML:** Add decoding of audio and video elements ([a42e66b](https://github.com/stencila/thema/commit/a42e66bef26fec2584e57a695732d3d9857c93b5))
* **HTML:** Add decoding of code blocks and fragments ([14ec9f4](https://github.com/stencila/thema/commit/14ec9f4c90bd17e95c865c9090f40d91ec91df1d))
* **HTML:** Add decoding of headings ([3055c85](https://github.com/stencila/thema/commit/3055c8592d9c0246cd7b40cff4b65a02777e6352))
* **HTML:** Add decoding of inline nodes ([a3a1869](https://github.com/stencila/thema/commit/a3a1869a640a0ef21179cc9e22200363c262911d))
* **HTML:** Add decoding of links ([be2f19d](https://github.com/stencila/thema/commit/be2f19d473a0aef2a397ef57d7d47eefdd4b1f01))
* **HTML:** Add decoding of lists ([ace5a5d](https://github.com/stencila/thema/commit/ace5a5d1e7ccda4ed95465ba8e0fd5df22dc8a7c))
* **HTML:** Add decoding of thematic breaks ([be054df](https://github.com/stencila/thema/commit/be054dfb57c204309b556bd8988e4845bd5f03b8))
* **HTML:** Encode article description ([fd35e16](https://github.com/stencila/thema/commit/fd35e166fb615bf67e4c7e4436d62f900496093b))
* **HTML:** Encoding and decoding of code nodes ([4deafef](https://github.com/stencila/thema/commit/4deafef336fd0029bf7dde96f545aad7b0fe6c26))
* **HTML:** Initial encoding and decoding of parameters ([62d3cce](https://github.com/stencila/thema/commit/62d3cce2247d44fd2c57618a77c70f3175e590f8))
* **HTML:** Initial implementation of decoding for tables ([a47a31b](https://github.com/stencila/thema/commit/a47a31b27305f09c92f5acf6c7409a6307261963))
* **HTML:** Render list item checkboxes ([f2f93e9](https://github.com/stencila/thema/commit/f2f93e9fd2884035ba6734009e8908028d28b017))
* **HTML & Markdown:** Support decoding of inline quote nodes ([d87d90b](https://github.com/stencila/thema/commit/d87d90babb1b5623072490adef8a0ecbd66c231c))
* **HTML Encoding:** Add encoding for vectors of primitives ([a00ca9f](https://github.com/stencila/thema/commit/a00ca9f0685eef32ce13113de21cb2797a889d4b))
* **HTML Encoding:** Encode ids on nodes ([5e6ad57](https://github.com/stencila/thema/commit/5e6ad571fce9ecf50f3a246ee3d784c67fe61a78))
* **i18n:** Add foundation for internationalization ([8b868cb](https://github.com/stencila/thema/commit/8b868cbb09288aaa374c17bb40588aa9183f48ac))
* **Identifiers:** Add uuids module ([34270cf](https://github.com/stencila/thema/commit/34270cf51e0e8ecb713e6bbc3d26d27a2a400813))
* **Include:** Allow documents to be included within others ([e9ab21f](https://github.com/stencila/thema/commit/e9ab21f100e2d533568d3eb20aaa0ced4fb60a62))
* **Inline content:** Implement patching for inline content nodes ([3f116bb](https://github.com/stencila/thema/commit/3f116bbff9cfab9860b71a1d24909f575025c6c8))
* **Inspect:** Add inspect command ([c57f5ad](https://github.com/stencila/thema/commit/c57f5addf85531f97595c24f2b70e205adcdd3ca))
* **Install:** Add install script and instructions for CLI ([ca2c15a](https://github.com/stencila/thema/commit/ca2c15accb60aa0c7ac742cab0d3b1ce55b7d6ee))
* **Interact:** Add completions, hints, validation and highlighting ([8662932](https://github.com/stencila/thema/commit/8662932d5a25231a971c17169aebf8472d656ff9))
* **Interact:** Add interactive mode ([8122ba0](https://github.com/stencila/thema/commit/8122ba0961bad39a9e1d2eea5bc7a29d8e77fbf5))
* **Interact:** Allow setting and resetting of prefix ([a684126](https://github.com/stencila/thema/commit/a684126f7bff23357aafe078651a338d7abf1cb2))
* **IPYNB:** Add decoding and encoding of Jupyter Notebooks ([4ee5129](https://github.com/stencila/thema/commit/4ee5129dffb41f8630a0a6b5507c467833ca942c))
* **IPYNB:** Add encoding of Jupyter notebooks ([5fe7ed9](https://github.com/stencila/thema/commit/5fe7ed9d3dbf9f1ff1fd72f676cf357f757ec26f))
* **IPYNB:** Convert pre-formatted text output to `CodeBlock` ([31d7b63](https://github.com/stencila/thema/commit/31d7b633414681d80325df0224d8e90a0da8d156))
* **IPYNB:** Convert stderr streams and errors into `CodeError`s ([ca59335](https://github.com/stencila/thema/commit/ca59335c12fc2f764a9a4ed7d58d10a9dadc0345))
* **IPYNB:** Decode plain text cell outputs into nodes where possible ([231341c](https://github.com/stencila/thema/commit/231341c1fba8ce9b4d6392b0721b9690054d0d3d))
* **IPYNB:** Handle Plotly and Vega outputs ([5c2d090](https://github.com/stencila/thema/commit/5c2d090a4de92c22f6388bea116227fa8ad9d858))
* **IPYNB:** Handle top level metadata in notebook ([f4491f6](https://github.com/stencila/thema/commit/f4491f6cdb7ef35ae0136634876529b5e964b9c4))
* **JavaScript code analysis:** Detect assignments ([32264cc](https://github.com/stencila/thema/commit/32264ccd96a133f457a17e36568363a3c1ddc41c))
* **JavaScript code analysis:** Detect usage of symbols ([21f127e](https://github.com/stencila/thema/commit/21f127e71eb96d060ee2eeff510e5286a5dae5fa))
* **JWT:** Add JSOn Web Token authorization ([075f407](https://github.com/stencila/thema/commit/075f407a70fa97a0f3d68647f3c2ba685c3a9ca7))
* **Kernels:** Add initial iteration of kernels ([0838353](https://github.com/stencila/thema/commit/0838353ebee779a123ee461b6b79bc5ff9a779fa))
* **Kernels:** Add mirroring of variables across kernels ([119fe88](https://github.com/stencila/thema/commit/119fe884d9ad365cc071d4c58ab47b786baad442))
* **Kernels:** Instantiate and resolve using language compatability ([e683cd6](https://github.com/stencila/thema/commit/e683cd6ce0c2a3ddfd74cf9a47531490e55c6625))
* **Kernels:** Only mirror variables if necessary ([dd1321f](https://github.com/stencila/thema/commit/dd1321f743b5adae957a928db45600ea7e6211a0))
* **Launcher:** Add button for opening Settings window ([84acb95](https://github.com/stencila/thema/commit/84acb952108d4f161fef0805977e271cbc51c1c0))
* **Launcher:** Add support for "Recent Projects", add initial styles ([5933396](https://github.com/stencila/thema/commit/59333968849428d420cdcf0924c6c171890f3eb9))
* **Launcher:** Make project names more prominent ([aeb68fe](https://github.com/stencila/thema/commit/aeb68fe9c097feb8074f9db97547ad68619a85cf))
* **Launcher:** Refine design of Project Launcher window ([692c4e6](https://github.com/stencila/thema/commit/692c4e6957a51f51efb01fa8f2c4a03103181cbd))
* **Logging:** Add --trace flag ([7122b19](https://github.com/stencila/thema/commit/7122b1990a714c522e916da42f9aeba6dbe704a8))
* **Logging:** Add configurable logging ([cd4ac32](https://github.com/stencila/thema/commit/cd4ac3243789ce702cb488806c73d9294aecedb1))
* **Logs:** Capture all logs, & add filter UI to Desktop ([3a58f73](https://github.com/stencila/thema/commit/3a58f73ca3848b2139fee46f635ccc64b4eaed7e))
* **Markdown:** Add decoding of images ([a9cc803](https://github.com/stencila/thema/commit/a9cc8035875fcaebe4a8d8522611a1debf2acf54))
* **Markdown:** Add decoding of lists ([e750a77](https://github.com/stencila/thema/commit/e750a77d345749b49645e338a245e6f6a7b8dc6c))
* **Markdown:** Add decoding of quote blocks ([d03105b](https://github.com/stencila/thema/commit/d03105b9b11ea61071a1f8cb7f9b431b876ef774))
* **Markdown:** Decode HTML within Markdown ([15df781](https://github.com/stencila/thema/commit/15df781b4220ebe43785a1aacc79f04e73b45016))
* **Markdown:** Decode list item check boxes ([9ff02c5](https://github.com/stencila/thema/commit/9ff02c540914aaf27544da3ef93352e2fa37acbb))
* **Markdown:** Initial implementation of encoding to Markdown ([87bea25](https://github.com/stencila/thema/commit/87bea251b81c8f603168eac3e5552d8e706e56f0))
* **Markdown encoding:** Encode code expressions and chunks ([da64b64](https://github.com/stencila/thema/commit/da64b6429b275231e2e8c758fd5c9081f26702ca))
* **MD, IPYNB:** Support syntax for inline code nodes ([eccf426](https://github.com/stencila/thema/commit/eccf4260b739fca18b04eb4e7120003ac379892c))
* **Node:** Update Node bindings for plugins ([a0b0c97](https://github.com/stencila/thema/commit/a0b0c972b621ef4ce2714a16e16502ae0283905c))
* **Node:** Very preliminary version of Stencila for Node.js package ([595308b](https://github.com/stencila/thema/commit/595308be17a3106543e456233e7133eda154bebf))
* **Node bindings:** Add ability to subscribe to logging events ([5b6421e](https://github.com/stencila/thema/commit/5b6421e6b91c0ab53935296b6e480084c44f51cc))
* **Node bindings:** Add plugins module ([71fe53d](https://github.com/stencila/thema/commit/71fe53db7b00f2812ca3d191e85a87539cf98ed5))
* **Node bindings:** Add subscriptions module ([926eab7](https://github.com/stencila/thema/commit/926eab78fb3ec31f5bf0cec1e8f4f5f77417c689))
* **Node package:** Expose config functions ([c8838b9](https://github.com/stencila/thema/commit/c8838b9dfe2b2d26665dba0a6a9e2ced8bf1f2fe))
* **Node.js:** Add dispatch function to handle RPC calls ([a36d396](https://github.com/stencila/thema/commit/a36d396c9efd5339fc6454d46492322597dd4dcb))
* **Node.js:** Add functions for managing project sources ([fee45df](https://github.com/stencila/thema/commit/fee45dff372366431f13796cea87636a903b10b2))
* **Node.js:** Add separate get function ([d75e684](https://github.com/stencila/thema/commit/d75e684ab738b8ff8d27c4416be080dae97ce363))
* **Node.js:** Allow project graph to be obtained in `dot` and other formats ([4d37304](https://github.com/stencila/thema/commit/4d37304120af4cead62665bccf42684dec1bf179))
* **Node.js:** Export dispatch function variants ([06e202b](https://github.com/stencila/thema/commit/06e202bccbbda10b8b5abcc636c4188c99c6f279))
* **Node.js:** Expose `DocumentFormat` type and map ([a4b9ab6](https://github.com/stencila/thema/commit/a4b9ab6bab6aec173b866414e1e23b51be10cf1b))
* **Node.js:** Expose `documents.writeAs` function ([07e08e8](https://github.com/stencila/thema/commit/07e08e8fd25bef9e74562ae35edf28398c00580d))
* **Node.js:** Generate TypeScript types from JSON Schemas ([3d1358b](https://github.com/stencila/thema/commit/3d1358b296652403f14a75f52628ac377fe3693d))
* **Open:** Add open command for opening  a stencil in browser ([29afbe1](https://github.com/stencila/thema/commit/29afbe17d36649b11b09e2032db4fae1de715cb9))
* **Option patches:** Implement apply patch ([0717721](https://github.com/stencila/thema/commit/071772133ce7050b3bed51a325a2ad08c60a0185))
* **Pandoc:** Add support for encoding to various formats via Pandoc ([75ee4eb](https://github.com/stencila/thema/commit/75ee4ebe3cb6e13e43c7a17159482a745223bd98))
* **Pandoc:** Encode lists ([18463a4](https://github.com/stencila/thema/commit/18463a4f05bb2d7a1bda4aa305a63c383b12dba2))
* **Pandoc:** End-to-end encoding and decoding for code ([7d0d12d](https://github.com/stencila/thema/commit/7d0d12d2145a2ca3bf0b81f6553c0d07f3b5d78b))
* **Pandoc:** Implement encoding of simple tables ([3dc9e44](https://github.com/stencila/thema/commit/3dc9e44db80579944bb81056445158fefc90741c))
* **Pandoc encoding:** Encode to code chunks to RPNGs ([c2c7148](https://github.com/stencila/thema/commit/c2c714841905088024c610a3581229db50aaf427))
* **Patches:** Add address resolution ([c95ad21](https://github.com/stencila/thema/commit/c95ad21603b2fc816b65269cd59a882596c68e3d))
* **Patches:** Add diff and merge CLI commands ([700cc47](https://github.com/stencila/thema/commit/700cc47927dea38a01159bd17c3ce3bc39e56d73))
* **Patches:** Add initial implementation of `DomOperation` ([a692e2b](https://github.com/stencila/thema/commit/a692e2b648061fc350bab1bc4ec8b07de023e3c4))
* **Patches:** Allow patches to be applied at a specific id in a node tree ([02a1056](https://github.com/stencila/thema/commit/02a1056d203d37ff7a8cc13b0e360339129b7968))
* **Patches:** Introduce functions and traits for diffing and patching document nodes ([1610291](https://github.com/stencila/thema/commit/1610291295b644b8e5b0615163ef45ba585612e9))
* **PDF:** Add encoding to PDFs ([b9f83a8](https://github.com/stencila/thema/commit/b9f83a8fecd423e043b05afd21acb585aae8e6fb))
* **Plain text:** Add encoding to plain text ([74b2442](https://github.com/stencila/thema/commit/74b2442b51f34c16e4d6caa29491e3adf0979b0f))
* **Plugins:** Add command to unlink a local plugin ([66e6475](https://github.com/stencila/thema/commit/66e6475aac4ec15e2f095582fc35df786fcf4274))
* **Plugins:** Add Encoda to plugin registry ([2ebe178](https://github.com/stencila/thema/commit/2ebe178b8109c439c38c39dfa0abdfd399b53b0c))
* **Plugins:** Add image property to plugin manifest struct ([9d72e21](https://github.com/stencila/thema/commit/9d72e21c2c4c4adaae5ca1b8b0521e023420d1e9))
* **Plugins:** Add plugin link subcommand; compile features schema ([7bc7e16](https://github.com/stencila/thema/commit/7bc7e1662453cd7dd9adbb3af1007493734be224))
* **Plugins:** Add schema function for obtaining schema of plugins; fix typings ([360f551](https://github.com/stencila/thema/commit/360f551b56f2e02dc04e0ac58f8b80f77805352d))
* **Plugins:** Delegate method calls to plugins ([2203914](https://github.com/stencila/thema/commit/22039141e8ffa51bc6764188c1d7ef874c6d406a))
* **Plugins:** Display  details about a plugin ([e93a1a2](https://github.com/stencila/thema/commit/e93a1a2b6f1835c2cde1799a8b4602c425c3a3fc))
* **Plugins:** Display plugin list as a table ([411f6c0](https://github.com/stencila/thema/commit/411f6c0cbaaea20b9e054a6592df19ea4195e8c5))
* **Plugins:** Implement install from CRAN ([1d561a3](https://github.com/stencila/thema/commit/1d561a3b79d81cbb22cdf4848983674b2cd238d7))
* **Plugins:** Implement install from NPM ([0e2c0ae](https://github.com/stencila/thema/commit/0e2c0ae343034082b592d90e2a69a32b19f889ef))
* **Plugins:** Implement install from PyPI ([51f0478](https://github.com/stencila/thema/commit/51f0478eb20534991bfc33ea366e2e761e79b52a))
* **Plugins:** Inital version of plugins subcommand ([6afc011](https://github.com/stencila/thema/commit/6afc011dada5622b3c1bc127e808d889fb00eaed))
* **Plugins:** Initial implementation for adding binary plugins ([a46315b](https://github.com/stencila/thema/commit/a46315b2db2f7322f9e84ef7b86025634913ec13))
* **Plugins:** Install using plugin's installUrl array ([eb4899e](https://github.com/stencila/thema/commit/eb4899e1db2de5b2794fe8726ddf3fdb9d9a421f))
* **Plugins:** Plugin clients for Javascript plugins (installed and linked) ([a4d2a83](https://github.com/stencila/thema/commit/a4d2a830de1cdc13d144e7c5730039a0882fcecd))
* **Plugins:** Read plugins at startup and display methods ([0ab348e](https://github.com/stencila/thema/commit/0ab348ebb18fd3b9d5db8f3a4478444a84d83ebe))
* **Plugins:** Remove mention of Plugins from desktop client ([871f7a6](https://github.com/stencila/thema/commit/871f7a6c289258c2784e5718b8776340debad177)), closes [#1137](https://github.com/stencila/thema/issues/1137)
* **Plugins:** Return display results ([b40b7ed](https://github.com/stencila/thema/commit/b40b7ed9f0c079f969520343922a0b5ddd624840))
* **Plugins:** Upgrade plugins based on current installation type ([828c37a](https://github.com/stencila/thema/commit/828c37a41646dc2937a165c37d6021c4aa4abe29))
* **Preview:** Add auto-updating document previews ([5ea9e4a](https://github.com/stencila/thema/commit/5ea9e4a470c12d8a999d8be332a0096b1c656ccf))
* **Process:** Remove process command ([e0f9562](https://github.com/stencila/thema/commit/e0f95625e5298a6423e8504a19f696a1130285c1))
* **Project:** Listen to project file change events and update sidebar ([dc067aa](https://github.com/stencila/thema/commit/dc067aabbfecff772a4a8790479bc38f6b7c66d3))
* **Project conversion:** Allow definition of conversion between files ([c3c574e](https://github.com/stencila/thema/commit/c3c574ec51c01060de1b60da73438455ab16697f))
* **Project graphs:** Add sources and associated files ([4e9db6d](https://github.com/stencila/thema/commit/4e9db6dcb89189ed10bd3d3a59798c77d91c1b4f))
* **Project graphs:** Export related JSON schemas ([d4745c3](https://github.com/stencila/thema/commit/d4745c36d3f5aadb31696f2fcc1a6045b9a80157))
* **Project graphs:** Include document parameters ([c0db190](https://github.com/stencila/thema/commit/c0db19056f02aa39cdd779f1875d7aae90d776f6))
* **Project graphs:** Recompile when there are file changes ([bdef1e3](https://github.com/stencila/thema/commit/bdef1e383dbabd06a05b9ae857571cec986b74be))
* **Project sources:** Add flag for whether or not source is active ([ab94670](https://github.com/stencila/thema/commit/ab9467066a19f1d87f15f44f8e48704a0a6df704))
* **Projects:**  Add CLI commands for initializing and showing projects ([bf8c34c](https://github.com/stencila/thema/commit/bf8c34c231aeffbee78115949e9766096ee44a1a))
* **Projects:** Add Node bindings for projects ([063d4ea](https://github.com/stencila/thema/commit/063d4ea1acf3e7d77affabea6f6939d1f3d8acbf))
* **Projects:** Add project events, published when project is updated ([d4be122](https://github.com/stencila/thema/commit/d4be122bc253987ed6d364ad7547d1ccf70541c6))
* **Projects:** Add Rust projects module ([253c00c](https://github.com/stencila/thema/commit/253c00cb4f10b62149f67f91f62a194a2a45aab7))
* **Projects:** Resolve main file path; add name to file description ([dcfb3f1](https://github.com/stencila/thema/commit/dcfb3f12b3694e8ec2f3903dd7e57d688cc38e3d))
* **Projects:** Update properties when project.json changes ([49b2e9c](https://github.com/stencila/thema/commit/49b2e9c451e17c1afe6740413ef50738ec7270c7))
* **Python code analysis:** Detect assignments ([374667b](https://github.com/stencila/thema/commit/374667ba6c1f1e37d1c4527becb09d6fd298ec43))
* **Python code analysis:** Detect usage of symbols ([daf107e](https://github.com/stencila/thema/commit/daf107e2242a7d6d47d3a94bc76a72fb398ff257))
* **R:** Very preliminary version of Stencila for R package ([7aed77e](https://github.com/stencila/thema/commit/7aed77e91712843f44f232a40b51832253041cbb))
* **R code analysis:** Improve inference of the type of assigned symbols ([db744d7](https://github.com/stencila/thema/commit/db744d79e0264eacca1a561bced6079d313eadd3))
* **Reshape:** Add initial implementaion of reshaping ([b52308f](https://github.com/stencila/thema/commit/b52308f1414f0f969a5025314eb4386733d61734))
* **RPNG:** Initial version of encoding and decoding ([ad30b3e](https://github.com/stencila/thema/commit/ad30b3eebde6e2c707cf591bb09b4e6044afde35))
* **Rust:** Add the execute command ([23832b2](https://github.com/stencila/thema/commit/23832b21f8e2cef57e968e4c30ae733f85663e7d))
* **Rust:** Allow a document to be closed by path ([b6e6819](https://github.com/stencila/thema/commit/b6e6819a11de26f15dd6b6601c7fc7cd861485be))
* **Rust:** Internally encode nodes to HTML ([de11fc9](https://github.com/stencila/thema/commit/de11fc927a442f806d69c5e0b83592a5d624f6e3))
* **Rust:** Re-export serde ([8992211](https://github.com/stencila/thema/commit/89922112f4420e7db8765cffb2a34bafc06cf1c8))
* **Rust & CLI:** Migrate to eyre for errors ([c704f02](https://github.com/stencila/thema/commit/c704f024d0d823c1e052bd7caea46c175ca8c84d))
* **Server:** Add flag to run in background ([967e2a9](https://github.com/stencila/thema/commit/967e2a9e3beadd3514292ce478530828e4051915))
* **Server:** Manage clients and their subscriptions ([2761105](https://github.com/stencila/thema/commit/276110597a2950d5fdfcfa68acbdfa6c7f6553ee))
* **Sessions:** Initial implementation of sessions ([2b658d7](https://github.com/stencila/thema/commit/2b658d71cd6c23491bb9fe69db1cd5351fafeeaa))
* **Settings:** Expose editor settings in UI ([50e3d87](https://github.com/stencila/thema/commit/50e3d8710ab2ccde4ddc798d680ded92c1a2f248))
* **Seve & request:** Add server and user-agent headers ([00f0335](https://github.com/stencila/thema/commit/00f0335e19cbb45d74d608e09a5b9ca95647abfd))
* **Sources:** Add project sources and CLI subcommand for managing them ([536aa83](https://github.com/stencila/thema/commit/536aa83ac011ebb30e730be4374d395d7a32d390))
* **Sources:** Improve matching and naming of project sources ([66f0f48](https://github.com/stencila/thema/commit/66f0f488bc842ea0d4cbaa23bb28f413e86c2215))
* **String patches:** Add move operation ([4aa3e1f](https://github.com/stencila/thema/commit/4aa3e1ff63f1dd909784d3736367df6e9173a5f7))
* **Telemetry:** Add telemetry module ([9c04444](https://github.com/stencila/thema/commit/9c0444454cffc39a526c1bd7f3798630be0aa45f))
* **TypeScript code analysis:** Add analysis of TypeScript code ([17d14e2](https://github.com/stencila/thema/commit/17d14e24cb750e8fcd25d92ec9e72a37fcae595d))
* **Upgrade:** Add options for desired version and to force upgrade ([ad28f01](https://github.com/stencila/thema/commit/ad28f019bf1dc8bd628d2ad450efdebe99771c96))
* **Upgrade:** Add upgrade command for updating to most recent release ([81a5775](https://github.com/stencila/thema/commit/81a57751a88a94f6036ae3614654a7a64e293aa1))
* **Utilities:** Add download function ([7acba07](https://github.com/stencila/thema/commit/7acba07c5a6fcb53300c07df1cb56886d74ff63d))
* **Vector patches:** Fine grained operations for replacement items ([731d852](https://github.com/stencila/thema/commit/731d852b84e0f780246c0fc264fab08a78755044))
* **Vector patches:** Implement forward moves ([9cf4f33](https://github.com/stencila/thema/commit/9cf4f33f11f27f7c695a3fe214e11bc98ecc34fd))
* **Viewer:** Add theme switcher ([49e492b](https://github.com/stencila/thema/commit/49e492b27d66fcb1832faf552b4bff4c8b4ad0ac))
* **Viewer:** Inital version of document viewer ([cec8d78](https://github.com/stencila/thema/commit/cec8d7807e22da238c26ba0ac6a3c6ce273befc9))
* **Web:** Add article editor ([68601d0](https://github.com/stencila/thema/commit/68601d096fd3b3d7b22ed514538332a374cec1f5))
* **Web:** Add main sessions functions ([78230d2](https://github.com/stencila/thema/commit/78230d2cf1a3275feb5b39078a0650c24099fb71))
* **Web:** Add patches module for applying `DomPatch`s sent by server ([9931425](https://github.com/stencila/thema/commit/99314257a4ccafd33ec42cfcd5801890dd746504))
* **Web patches:** Add JSON patching module ([2002a96](https://github.com/stencila/thema/commit/2002a96f9e706663e8c0916dc72eda1e040185f5))
* **Web patches:** Diffing of strings ([ebf8e61](https://github.com/stencila/thema/commit/ebf8e6101367a78464af8c547a968b195c02bf3a))
* **Web RPC:** Add handling of `documents` functions ([362dda6](https://github.com/stencila/thema/commit/362dda6e14cc278e62f520d6742ed4cae89a735a))
* **Zip archive:** Add option to create a zip archive ([88c9ac7](https://github.com/stencila/thema/commit/88c9ac79c7679d1b5442e86656f43b92fe46970f))
* add serve command and web api ([f9e80c8](https://github.com/stencila/thema/commit/f9e80c876c194ad48d4e66834f91e7cb743c759e))
* Added handler to log from logga to winston ([a91302e](https://github.com/stencila/thema/commit/a91302e027881193fb88b813468fb61a5f5a29a6))
* Updated to latest encoda and added --theme argument ([0668af4](https://github.com/stencila/thema/commit/0668af442fa14d00ce1119b7cd99d03f856e34a3))


### Performance Improvements

* **Binaries:** Memoize require calls ([3a1e243](https://github.com/stencila/thema/commit/3a1e2434a12867fbf0589de8ca3ed65fb0a35ea2))
* **CLI:** Lazily load syntaxes and themes; only highlight in interactive mode ([206da6c](https://github.com/stencila/thema/commit/206da6cc69a3ae3429113cda724a901062f19b88))
* **Directories:** Avoid unecessary create_dir_all call ([95cfd3d](https://github.com/stencila/thema/commit/95cfd3da7918d43a81c18aec0794c9c1402a92de))
* **Files:** Use cache of files ignored ([f4c0308](https://github.com/stencila/thema/commit/f4c0308bfae40bd76fa57d477095bc991860ff1c))
* **Files:** Use parallel walk to do initial collection of files for a project ([c953b05](https://github.com/stencila/thema/commit/c953b0554a65ef6eb48dd7722e1d0d71cca0f986))
* **Graph:** Remove Graph update listeners when closing Graph view ([e96d02d](https://github.com/stencila/thema/commit/e96d02d4ab325cfea39771bd5cfe0bc868053729))
* **HTML:** Use concat instead of format when encoding lists ([7984768](https://github.com/stencila/thema/commit/7984768c874a83d32d3bd545c2bc6454a51952a7))
* **Preview:** Debounce live document preview generation for better UX ([87dd76d](https://github.com/stencila/thema/commit/87dd76d432419832735b7bb288355521a8b95076))
* **Rust:** Use crossbeam-channel where possible ([67df93d](https://github.com/stencila/thema/commit/67df93d5ef9d77d86e0df81dd547d90b3a954dcd))
* **Upgrade:** Release and fetch compressed binaries ([e8cdf44](https://github.com/stencila/thema/commit/e8cdf4477e7472e3c85fb27dff9c0a1b7359d606))

## [2.24.4](https://github.com/stencila/thema/compare/v2.24.3...v2.24.4) (2021-10-26)


### Bug Fixes

* **Bootstrap:** Extend correct Button style class ([73fac61](https://github.com/stencila/thema/commit/73fac61eab7bb538aa9a45e17697aef21ea0c188))
* **CSS:** Work around css-nano bug with opacity values ([f9d67b8](https://github.com/stencila/thema/commit/f9d67b8a708bcbdaa20b735ed63e5e46a95483fb))
* **Deps:** Update dependencies ([5d455e8](https://github.com/stencila/thema/commit/5d455e888a415e268e23adc4ab89777bbbaffbb9))

## [2.24.3](https://github.com/stencila/thema/compare/v2.24.2...v2.24.3) (2021-10-18)


### Bug Fixes

* **dependencies:** update dependency @stencila/components to ^0.41.0 ([71db8f5](https://github.com/stencila/thema/commit/71db8f538c62dc9c070b344cf709eaa337e0d237))

## [2.24.2](https://github.com/stencila/thema/compare/v2.24.1...v2.24.2) (2021-06-15)


### Bug Fixes

* **dependencies:** update dependency @stencila/components to ^0.32.0 ([295aa71](https://github.com/stencila/thema/commit/295aa71d56442c607c977ec736cf259cb17c78fb))

## [2.24.1](https://github.com/stencila/thema/compare/v2.24.0...v2.24.1) (2021-04-01)


### Bug Fixes

* **Gallery:** Fix mismatch type in article generation script ([8c90338](https://github.com/stencila/thema/commit/8c9033897b17118dcd7f12a0de418c09511ecb95))

# [2.24.0](https://github.com/stencila/thema/compare/v2.23.0...v2.24.0) (2021-03-30)


### Bug Fixes

* **Cite:** Avoid italicizing parentheses surrounding citations ([f75cc56](https://github.com/stencila/thema/commit/f75cc56e537e717e760b1489cd085e0393ba7376))


### Features

* **Citations:** Add support for alternative citation modes ([ab821f1](https://github.com/stencila/thema/commit/ab821f1e8d2a82e43cf5cafed8b753bdbe78ba90))

# [2.23.0](https://github.com/stencila/thema/compare/v2.22.1...v2.23.0) (2021-03-19)


### Bug Fixes

* **Cite:** Temporarily remove parentheses around orphan Cite elements ([db01994](https://github.com/stencila/thema/commit/db01994e8fdcf7f02fcc28f7946563e4f811d73c))
* **Elife:** Add missing semicolon between Cites in CiteGroups ([74729ad](https://github.com/stencila/thema/commit/74729adda546c446f2ac0ace9d93f43513c5474c)), closes [#314](https://github.com/stencila/thema/issues/314)


### Features

* **Extensions:** Add `cite-author-year` extension ([fb534e2](https://github.com/stencila/thema/commit/fb534e2ca030cb30d8b7d43d00cc973e697bc26c))

## [2.22.1](https://github.com/stencila/thema/compare/v2.22.0...v2.22.1) (2021-03-10)


### Bug Fixes

* **Bootsrap, Latex, RPNG:** Prevent images breaking out of containers ([9018c40](https://github.com/stencila/thema/commit/9018c40eaa2488cdeaa04ea1a1ee5d2d7586bccf))

# [2.22.0](https://github.com/stencila/thema/compare/v2.21.2...v2.22.0) (2021-03-05)


### Bug Fixes

* **RPNG:** Ensure contents of all node types are fully visible ([f2586b3](https://github.com/stencila/thema/commit/f2586b32c741932c781f1fa946c3231a39466a5c))


### Features

* **Utils:** Expose function for getting dimensions of RPNG symbol ([1f74664](https://github.com/stencila/thema/commit/1f74664acca0279a4bfb393737b02f29f490aa06))

## [2.21.2](https://github.com/stencila/thema/compare/v2.21.1...v2.21.2) (2021-02-19)


### Bug Fixes

* **Cite:** Format in-text citations outside of CiteGroups ([e0456da](https://github.com/stencila/thema/commit/e0456dacfa3f2159062b0c1e0c9efcf9843c835d))
* **Cite:** Wrap standalone citations in brackets ([4113180](https://github.com/stencila/thema/commit/4113180d82746cd030b14321efb65726568c5707))

## [2.21.1](https://github.com/stencila/thema/compare/v2.21.0...v2.21.1) (2021-02-15)


### Bug Fixes

* **dependencies:** update dependency @stencila/components to ^0.29.0 ([59826cc](https://github.com/stencila/thema/commit/59826cc619805e36a08929e5323fc8b33fde485e))

# [2.21.0](https://github.com/stencila/thema/compare/v2.20.16...v2.21.0) (2021-02-15)


### Bug Fixes

* **Giga:** Refine GigaScience based theme ([5511bc5](https://github.com/stencila/thema/commit/5511bc5ad4e5df3e4eca1a581ae78434f7af583f))
* **In-text citations:** Add separator between Cite items within a CiteGroup ([5a30430](https://github.com/stencila/thema/commit/5a304307bdb7e931d1a84329eb369c1bef2be068))


### Features

* Style in-text citations ([58ee4f8](https://github.com/stencila/thema/commit/58ee4f89bdad86135c02d4930d54ec63b9d6d6a5)), closes [#283](https://github.com/stencila/thema/issues/283)
* **Numeric in-text citations:** Split out into separate extension for reuse ([d6e496a](https://github.com/stencila/thema/commit/d6e496a50049a132eefd6908091e2f1db69e3b9d))

## [2.20.16](https://github.com/stencila/thema/compare/v2.20.15...v2.20.16) (2021-02-11)


### Bug Fixes

* **dependencies:** update dependency @stencila/components to ^0.28.0 ([0192243](https://github.com/stencila/thema/commit/01922432aad08b4bf97422679f713289e510e549))

## [2.20.15](https://github.com/stencila/thema/compare/v2.20.14...v2.20.15) (2021-02-11)


### Bug Fixes

* **RPNG:** Fix RPNG icon cropping/overlapping figures ([3771dd3](https://github.com/stencila/thema/commit/3771dd3931cf1841cadcd07c8f6a57d25ddee180)), closes [#270](https://github.com/stencila/thema/issues/270)

## [2.20.14](https://github.com/stencila/thema/compare/v2.20.13...v2.20.14) (2021-02-10)


### Bug Fixes

* **eLife:** update unit tests to support new reference format ([#293](https://github.com/stencila/thema/issues/293)) ([edae444](https://github.com/stencila/thema/commit/edae44474fc741d44750aba1fbd80f43f30a9ceb))

## [2.20.13](https://github.com/stencila/thema/compare/v2.20.12...v2.20.13) (2021-02-05)


### Bug Fixes

* **Elife:** Ensure editor autocomplete doesn't clash with suggestion ([4db8ca3](https://github.com/stencila/thema/commit/4db8ca351c111d9e924eb27d6388696031ffa58a))

## [2.20.12](https://github.com/stencila/thema/compare/v2.20.11...v2.20.12) (2021-01-25)


### Bug Fixes

* **dependencies:** update dependency @stencila/components to ^0.27.0 ([7d8001e](https://github.com/stencila/thema/commit/7d8001e0e8347215fc3561f8d355d8faced1bcc5))

## [2.20.11](https://github.com/stencila/thema/compare/v2.20.10...v2.20.11) (2021-01-14)


### Bug Fixes

* **dependencies:** update dependency @stencila/components to ^0.26.8 ([f780a5f](https://github.com/stencila/thema/commit/f780a5f10b8c84112e6a8f29c4892be0ba66af30))

## [2.20.10](https://github.com/stencila/thema/compare/v2.20.9...v2.20.10) (2021-01-06)


### Bug Fixes

* **dependencies:** update dependency @stencila/components to ^0.26.7 ([69495ff](https://github.com/stencila/thema/commit/69495ffcaf8cc88f86a8505670cf1fdb42714cbf))

## [2.20.9](https://github.com/stencila/thema/compare/v2.20.8...v2.20.9) (2021-01-04)


### Bug Fixes

* **Deps:** Update dev-dependencies (major) ([8e2db57](https://github.com/stencila/thema/commit/8e2db574f8a255bba34b8b2b80e4fb56a45250b1))

## [2.20.8](https://github.com/stencila/thema/compare/v2.20.7...v2.20.8) (2020-12-13)


### Bug Fixes

* **Deps:** Upgrade to postcss-import-url and npm audit fix ([f4c8bba](https://github.com/stencila/thema/commit/f4c8bba50f54bc867be4790dfb0dfb7e671443a7))
* **Deps:** Use postcss-import-url v5.1.0 ([9896f35](https://github.com/stencila/thema/commit/9896f35354ccd51de3edcec6721ec97aa32a735b))
* **RPNG:** Keep icon inside bounding box ([ba55ca9](https://github.com/stencila/thema/commit/ba55ca94daf1664378b4307e4946344ef1f5201d))

## [2.20.7](https://github.com/stencila/thema/compare/v2.20.6...v2.20.7) (2020-12-09)


### Bug Fixes

* **dependencies:** update dependency @stencila/components to ^0.26.5 ([b294462](https://github.com/stencila/thema/commit/b29446252ea7987eae52f6d86e9bf34725b3df3c))

## [2.20.6](https://github.com/stencila/thema/compare/v2.20.5...v2.20.6) (2020-12-09)


### Bug Fixes

* **dependencies:** update dependency @simonwep/pickr to ^1.8.0 ([cce915b](https://github.com/stencila/thema/commit/cce915bfdb9fc398c905b362862d5c9e76dc271a))

## [2.20.5](https://github.com/stencila/thema/compare/v2.20.4...v2.20.5) (2020-12-08)


### Bug Fixes

* **RPNG:** Add icons to executable nodes ([c6e9753](https://github.com/stencila/thema/commit/c6e9753497d3e6e37871a91b5a61a505dd2bccd5))
* **RPNG:** Increase subtedly of affordance ([cb5dd56](https://github.com/stencila/thema/commit/cb5dd564b5b3470db2e578fd0121fe8152a4ab76))

## [2.20.4](https://github.com/stencila/thema/compare/v2.20.3...v2.20.4) (2020-12-01)


### Bug Fixes

* **eLife:** Add comma space before parentOrganization ([c1e14a3](https://github.com/stencila/thema/commit/c1e14a3bda8fafb0db46dff86d8641f194f74cee))

## [2.20.3](https://github.com/stencila/thema/compare/v2.20.2...v2.20.3) (2020-11-24)


### Bug Fixes

* **CI:** Always build package & docs to catch issues ([74d00bf](https://github.com/stencila/thema/commit/74d00bf61417715df08378edffbce94629140d5a))

## [2.20.2](https://github.com/stencila/thema/compare/v2.20.1...v2.20.2) (2020-11-24)


### Bug Fixes

* **dependencies:** update dependency @stencila/components to ^0.26.3 ([d1ddc1a](https://github.com/stencila/thema/commit/d1ddc1a38b61e8c3449514061315f2d2fc079cae))

## [2.20.1](https://github.com/stencila/thema/compare/v2.20.0...v2.20.1) (2020-11-24)


### Bug Fixes

* **Elife:** separate address span with commas ([56294b9](https://github.com/stencila/thema/commit/56294b969a7699460faf959f1742c7b8d327e1d8)), closes [#261](https://github.com/stencila/thema/issues/261)

# [2.20.0](https://github.com/stencila/thema/compare/v2.19.3...v2.20.0) (2020-10-29)


### Bug Fixes

* More style refinements for metadata elements ([705b2ad](https://github.com/stencila/thema/commit/705b2ad2640c6ca99b91f6b9edcd749eaf11dcff))


### Features

* Style new Article elements added by Encoda v0.99.16 ([3948918](https://github.com/stencila/thema/commit/39489183a4d6217bc0cfe2118ed0f8519faf02d0))

## [2.19.3](https://github.com/stencila/thema/compare/v2.19.2...v2.19.3) (2020-10-27)


### Bug Fixes

* **dependencies:** update react monorepo to v17 ([a12e559](https://github.com/stencila/thema/commit/a12e559e0b3a010e972269f6c6bea609275a68ad))

## [2.19.2](https://github.com/stencila/thema/compare/v2.19.1...v2.19.2) (2020-10-27)


### Bug Fixes

* **dependencies:** update dependency @stencila/components to ^0.25.0 ([7dfebc6](https://github.com/stencila/thema/commit/7dfebc6965f116763567b5d5304bef46f0a5de21))
* **dependencies:** update dependency project-name-generator to ^2.1.9 ([c2b61ee](https://github.com/stencila/thema/commit/c2b61eec22c93ce0da0da0fbe8fdd80ba38e4f46))

## [2.19.1](https://github.com/stencila/thema/compare/v2.19.0...v2.19.1) (2020-10-01)


### Bug Fixes

* **dependencies:** update dependency @stencila/components to ^0.23.5 ([60af470](https://github.com/stencila/thema/commit/60af4708da806abd24c5e0ff5877f525863f0eca))

# [2.19.0](https://github.com/stencila/thema/compare/v2.18.0...v2.19.0) (2020-09-29)


### Features

* **Giga:** Adds a theme for GigaScience and GigaByte ([3784dab](https://github.com/stencila/thema/commit/3784dab4d60c3bc5c047be82fadaa65913db9adf))

# [2.18.0](https://github.com/stencila/thema/compare/v2.17.2...v2.18.0) (2020-09-28)


### Bug Fixes

* **Cite APA:** Don't add ampersand before lone author names ([7e623a2](https://github.com/stencila/thema/commit/7e623a2f667a762572478e6f71d94dc3d4fd642e))
* **Docs:** Don't inject toolbar or component scripts multiple times ([9fb3fda](https://github.com/stencila/thema/commit/9fb3fdafcf00e39b6447067ce172d0ed32d32401))
* **F1000:** Formatting and other tidyups ([59ce4f3](https://github.com/stencila/thema/commit/59ce4f334d942851fdadf871c756ec072afde45f))
* **PLOS:** Refine theme for WebComponent compatibility ([b358489](https://github.com/stencila/thema/commit/b358489f7032d13efaf6a2a53cfb0d8c7321a851))
* **Stencila:** Match WebComponent button font-family to theme ([9173879](https://github.com/stencila/thema/commit/91738792e610331004dadd68a72749fc48d7bb2f))


### Features

* **Docs:** Inject Executable Toolbar into theme previews ([92d307f](https://github.com/stencila/thema/commit/92d307f98f85446338f2d1e32533d606015b6e5e)), closes [#233](https://github.com/stencila/thema/issues/233)
* **F1000:** Add Table element styles ([e2579b2](https://github.com/stencila/thema/commit/e2579b2b0f8359bb2c2ee8d5170728f036114b12))
* **F1000:** Initial version of a theme for F1000Research ([a1e8e9e](https://github.com/stencila/thema/commit/a1e8e9e64f353fd65d96f6bb8e52901c3db15b1c))
* **F1000:** Style WebComponents to match theme ([93ccb8f](https://github.com/stencila/thema/commit/93ccb8f70de3d54c1f931f6c33dd8d5e4fb94b58))

## [2.17.2](https://github.com/stencila/thema/compare/v2.17.1...v2.17.2) (2020-09-17)


### Bug Fixes

* **dependencies:** update dependency @simonwep/pickr to ^1.7.4 ([cb0e4c2](https://github.com/stencila/thema/commit/cb0e4c2493044d79db7b313ecccce3d2376bd976))

## [2.17.1](https://github.com/stencila/thema/compare/v2.17.0...v2.17.1) (2020-09-17)


### Bug Fixes

* **dependencies:** update dependency @elifesciences/pattern-library to v0.0.6 ([de8bf11](https://github.com/stencila/thema/commit/de8bf111a388d0feda778773a5c1f858c9303f56))
* **dependencies:** update dependency @stencila/components to ^0.21.5 ([f6ed744](https://github.com/stencila/thema/commit/f6ed74416206a5f4db7ebd28014fceccb8f9f001))

# [2.17.0](https://github.com/stencila/thema/compare/v2.16.3...v2.17.0) (2020-09-15)


### Features

* **Elife:** link to the new labs post directly ([829f474](https://github.com/stencila/thema/commit/829f474b35230668ebce046f42fe929ac3fe263a))

## [2.16.3](https://github.com/stencila/thema/compare/v2.16.2...v2.16.3) (2020-08-24)


### Bug Fixes

* **Elife:** set target _parent on external links ([ee80b38](https://github.com/stencila/thema/commit/ee80b38b27e91c48bd7dba5c966193607f0cbcc8))

## [2.16.2](https://github.com/stencila/thema/compare/v2.16.1...v2.16.2) (2020-08-21)


### Bug Fixes

* **dependencies:** update dependency @stencila/components to ^0.21.1 ([c920d34](https://github.com/stencila/thema/commit/c920d342937dfb1a4567c41b6187ba1da2c7ad0e))
* **Elife:** Improve disabled button contrast (Close [#235](https://github.com/stencila/thema/issues/235)) ([9a4fa9b](https://github.com/stencila/thema/commit/9a4fa9b32b3edb0936d09844f89c401c00c6c01d))

## [2.16.1](https://github.com/stencila/thema/compare/v2.16.0...v2.16.1) (2020-08-21)


### Bug Fixes

* **ELife:** Vertically center button labels ([309453f](https://github.com/stencila/thema/commit/309453f1aa329fc3ea8d57ff323fe23f6bc6926a))

# [2.16.0](https://github.com/stencila/thema/compare/v2.15.5...v2.16.0) (2020-08-19)


### Features

* **Elife:** Use link to executable for social media sharing ([81367e2](https://github.com/stencila/thema/commit/81367e2bedf4e587272d1157b7814b1cfe52308a))

## [2.15.5](https://github.com/stencila/thema/compare/v2.15.4...v2.15.5) (2020-08-19)


### Bug Fixes

* **Elife:** Social media links should encode doi ([0fead25](https://github.com/stencila/thema/commit/0fead25a125f30bde93d458313dc2e13d46491eb))

## [2.15.4](https://github.com/stencila/thema/compare/v2.15.3...v2.15.4) (2020-08-17)


### Bug Fixes

* **Elife:** Don't use string variables in URLs ([a787107](https://github.com/stencila/thema/commit/a7871075c92f7bd39640f00a776ec1a1177271ed))

## [2.15.3](https://github.com/stencila/thema/compare/v2.15.2...v2.15.3) (2020-08-06)


### Bug Fixes

* **Utils:** Include element children when cloning a node ([8a438e8](https://github.com/stencila/thema/commit/8a438e85da1ddc69a7b48e91f6fc10a3cdca12a3))
* wrap isn’t work if element has children ([6057769](https://github.com/stencila/thema/commit/6057769166e7ed824772d8f3658d56b9ea5345da))

## [2.15.2](https://github.com/stencila/thema/compare/v2.15.1...v2.15.2) (2020-08-05)


### Bug Fixes

* **Build:** Fix root dir resolution for relative paths ([07f0115](https://github.com/stencila/thema/commit/07f01155f13136f7cad7f46b49e189b2e470ebd2))

## [2.15.1](https://github.com/stencila/thema/compare/v2.15.0...v2.15.1) (2020-08-05)


### Bug Fixes

* **Build:** Make static asset paths relative so they work on CDNs ([aade93a](https://github.com/stencila/thema/commit/aade93a0b9e702be99de738b0db27a35a7cef46d))

# [2.15.0](https://github.com/stencila/thema/compare/v2.14.0...v2.15.0) (2020-08-04)


### Features

* **ELife:** Style Executable Doc Toolbar & Code components ([0253f8b](https://github.com/stencila/thema/commit/0253f8bb53da59cab29b10dd004cc6e700f0d180))

# [2.14.0](https://github.com/stencila/thema/compare/v2.13.2...v2.14.0) (2020-07-30)


### Features

* **Elife:** Add oa and cc icon links ([c6fcdcf](https://github.com/stencila/thema/commit/c6fcdcfa43f8f3613a29a81096c5e10657be32a8))


### Reverts

* Revert "style(Elife): Add relative to bring open acess and copyright inline" ([3542364](https://github.com/stencila/thema/commit/3542364ebc2ef3a635092ac93d537cc3552d5066))

## [2.13.2](https://github.com/stencila/thema/compare/v2.13.1...v2.13.2) (2020-07-29)


### Bug Fixes

* **dependencies:** update dependency @stencila/components to ^0.14.13 ([2b4f5cc](https://github.com/stencila/thema/commit/2b4f5cc813e284e328c32e848f0ac59300ec968a))
* **dependencies:** update dependency @stencila/components to ^0.15.1 ([f69641a](https://github.com/stencila/thema/commit/f69641ad9f2f2023bdddecb7bbb600db4acf9df2))
* **RPNG:** Update Code component styling for revamped selectors ([99a297b](https://github.com/stencila/thema/commit/99a297b34ba31e0ef081addab4413826e9aa7114))

## [2.13.1](https://github.com/stencila/thema/compare/v2.13.0...v2.13.1) (2020-07-21)


### Bug Fixes

* **dependencies:** update dependency @simonwep/pickr to ^1.7.2 ([b56a220](https://github.com/stencila/thema/commit/b56a22066adc94f0d6bdc563ee6900a368f9b621))

# [2.13.0](https://github.com/stencila/thema/compare/v2.12.0...v2.13.0) (2020-07-13)


### Features

* **Stencila:** Style table rows for better readability ([876c87d](https://github.com/stencila/thema/commit/876c87d3d2ad1de96badde5d8c86de89e4256aed))

# [2.12.0](https://github.com/stencila/thema/compare/v2.11.1...v2.12.0) (2020-07-06)


### Features

* **eLife:** Add executable version download link ([fd9a985](https://github.com/stencila/thema/commit/fd9a98513c72ad6e3773cf37f010f6a6337e1039))

## [2.11.1](https://github.com/stencila/thema/compare/v2.11.0...v2.11.1) (2020-07-06)


### Bug Fixes

* **eLife:** attribute should be set on list-item ([252c827](https://github.com/stencila/thema/commit/252c827bbe4d56a66aaf5a47e9de4c6d1bc6202e))

# [2.11.0](https://github.com/stencila/thema/compare/v2.10.7...v2.11.0) (2020-07-06)


### Features

* **eLife:** Add target=“_parent” to download links ([79b427b](https://github.com/stencila/thema/commit/79b427bda4f5f9a40bdd1a8ee96a242adb983621))

## [2.10.7](https://github.com/stencila/thema/compare/v2.10.6...v2.10.7) (2020-07-03)


### Bug Fixes

* **dependencies:** update dependency @stencila/components to ^0.14.8 ([4e7a059](https://github.com/stencila/thema/commit/4e7a059bfd4a91c7fbc7806d37714f8252e149c7))

## [2.10.6](https://github.com/stencila/thema/compare/v2.10.5...v2.10.6) (2020-07-03)


### Bug Fixes

* **dependencies:** update dependency @elifesciences/pattern-library to v0.0.3 ([56e2227](https://github.com/stencila/thema/commit/56e2227a4ba4213095f6472b4f4302524c1b90e2))

## [2.10.5](https://github.com/stencila/thema/compare/v2.10.4...v2.10.5) (2020-07-03)


### Bug Fixes

* **dependencies:** update dependency @simonwep/pickr to ^1.7.1 ([c2c58c9](https://github.com/stencila/thema/commit/c2c58c9f600cccf738a15af36069f994d21b3623))

## [2.10.4](https://github.com/stencila/thema/compare/v2.10.3...v2.10.4) (2020-07-02)


### Bug Fixes

* **eLife:** Figures pdf list item should be sibling of article pdf list item ([b7b7167](https://github.com/stencila/thema/commit/b7b7167d4cf647135c90153cad764979c6195830)), closes [#200](https://github.com/stencila/thema/issues/200)

## [2.10.3](https://github.com/stencila/thema/compare/v2.10.2...v2.10.3) (2020-06-23)


### Bug Fixes

* **Deps:** Upgrade Encoda ([44352c7](https://github.com/stencila/thema/commit/44352c7f6d66bc1809a38d5da49e8af98e5dfadf))

## [2.10.2](https://github.com/stencila/thema/compare/v2.10.1...v2.10.2) (2020-06-05)


### Bug Fixes

* **dependencies:** update dependency @stencila/components to ^0.14.3 ([e7b5f8a](https://github.com/stencila/thema/commit/e7b5f8a38aa6ca549ecf4f53dda75090a4fa1e2c))

## [2.10.1](https://github.com/stencila/thema/compare/v2.10.0...v2.10.1) (2020-05-22)


### Bug Fixes

* **Theme Editor:** Fix theme editor sidebar layout in Chrome ([b6c094e](https://github.com/stencila/thema/commit/b6c094e3c31f724117580fc1137feba9c0030786))
* **Theme Editor:** Improve matching logic for color CSS variables ([f1a17af](https://github.com/stencila/thema/commit/f1a17af7d41cf528355fc789ee60081b9ebbb3c5))
* **Theme Editor:** Refine editor styles, add focus styles to buttons ([a8b7a8b](https://github.com/stencila/thema/commit/a8b7a8b0874eef413190ab53a187ebcbf16794bc))

# [2.10.0](https://github.com/stencila/thema/compare/v2.9.0...v2.10.0) (2020-05-21)


### Bug Fixes

* **Tufte:** Nest imported styles and other tweaks ([0c9c590](https://github.com/stencila/thema/commit/0c9c590eea879fa862266b42c458a74d88835750))


### Features

* **Tufte:** Add the Tufte theme ([be2d1b8](https://github.com/stencila/thema/commit/be2d1b8d45b000ba5385810db9ee200e1e52ef1a))

# [2.9.0](https://github.com/stencila/thema/compare/v2.8.0...v2.9.0) (2020-05-21)


### Features

* **LaTeX:** Add font color as a variable ([696aeef](https://github.com/stencila/thema/commit/696aeefdc2961373f2d01fd6b2511371d7e93652))
* **LaTeX:** Add the LaTeX theme ([64e4ded](https://github.com/stencila/thema/commit/64e4ded2270f3961a87e14b0df9cbf4e173c849d))

# [2.8.0](https://github.com/stencila/thema/compare/v2.7.3...v2.8.0) (2020-05-15)


### Bug Fixes

* **Elife:** Reference lacking a volume is not an Thema error ([b75ddbe](https://github.com/stencila/thema/commit/b75ddbe7b04bf85adc2615d0467fa0e56b027d33))
* **Elife:** Reference PublicationVolume structure ([2504670](https://github.com/stencila/thema/commit/250467009a6c8f74d300acedd96a6d74c80032e3))
* **Elife:** Style more types of reference source name ([2640327](https://github.com/stencila/thema/commit/2640327c00269e85ef5cb1c1d69a985459feee64))


### Features

* **Elife:** Catch errors from date formatting ([2081f00](https://github.com/stencila/thema/commit/2081f0063b48b2e5d7621c0cce964116e20ba05e))
* **Elife:** Throw error on request for invalid PDF type ([fcd8e75](https://github.com/stencila/thema/commit/fcd8e758701d4a1efaae9552f35166f37125e77c))

## [2.7.3](https://github.com/stencila/thema/compare/v2.7.2...v2.7.3) (2020-05-14)


### Bug Fixes

* **dependencies:** update dependency @stencila/components to ^0.13.0 ([d47deb3](https://github.com/stencila/thema/commit/d47deb369113013c180b78d403114145530c2e18))

## [2.7.2](https://github.com/stencila/thema/compare/v2.7.1...v2.7.2) (2020-05-07)


### Bug Fixes

* **dependencies:** update dependency @simonwep/pickr to ^1.6.0 ([2abd9bb](https://github.com/stencila/thema/commit/2abd9bb2a5f4982662a54c146baa5dc23c910046))

## [2.7.1](https://github.com/stencila/thema/compare/v2.7.0...v2.7.1) (2020-05-06)


### Bug Fixes

* **Elife:** Consistent title retrieval ([5966ea5](https://github.com/stencila/thema/commit/5966ea5d09cd3da3e7ea6b99a00f9ef2d09aa49d))
* **Elife:** Remove wrong margin ([96e3ac7](https://github.com/stencila/thema/commit/96e3ac7f7a05c8b5e6e77c322cc8b5af5833f0a8))

# [2.7.0](https://github.com/stencila/thema/compare/v2.6.1...v2.7.0) (2020-05-01)


### Bug Fixes

* **Elife:** More appropriate array method ([67912e5](https://github.com/stencila/thema/commit/67912e58face2ab5f8c51060c1aa3713742cea6d))
* **Elife:** Style lint fixes ([30db12f](https://github.com/stencila/thema/commit/30db12f1f5d024199c81fe1d69b15d49c193a655))


### Features

* **Elife:** Add vertical space around social icons ([762e984](https://github.com/stencila/thema/commit/762e98461b7a3baad84e9d9275a9122ee80f2f0e))
* **Elife:** First pass social sharers DOM ([35900de](https://github.com/stencila/thema/commit/35900dee4787aade08819a30a31d46fc0a360d8e))
* **Elife:** Get the article DOI ([63a9571](https://github.com/stencila/thema/commit/63a9571645203f1d8d81c46c78b69603db3079b6))
* **Elife:** Get the article title ([370e68f](https://github.com/stencila/thema/commit/370e68f48d9e16124eff3e6cbabded96af034a64))
* **Elife:** Handle error from social tools build ([28d010f](https://github.com/stencila/thema/commit/28d010f7319c4ecb73ed5a669848504ef00627be))
* **Elife:** In-article text retrieval & whitespace normalisation ([483bcbf](https://github.com/stencila/thema/commit/483bcbf55e5aecc4fdd3a15f5dc96f474f784cf8))
* **Elife:** Social sharers hover state ([5206921](https://github.com/stencila/thema/commit/5206921e8ba7df1f0aa77b3962d08ad435c02fbd))
* **Elife:** Style social sharing icons ([de13cd0](https://github.com/stencila/thema/commit/de13cd0de358fb1ba0ffa6447527c37e7e20cb02))

## [2.6.1](https://github.com/stencila/thema/compare/v2.6.0...v2.6.1) (2020-04-29)


### Bug Fixes

* **Elife:** Affiliations styling regression ([9f99518](https://github.com/stencila/thema/commit/9f995184f1dbdaea688e5394038eb96fed3ca2a1))

# [2.6.0](https://github.com/stencila/thema/compare/v2.5.0...v2.6.0) (2020-04-29)


### Features

* **Elife:** Add basic link to downloads menu ([8977cde](https://github.com/stencila/thema/commit/8977cdee491300dfcf39c2f3377da9768dcbd4e3))
* **Elife:** Add download icon for narrower viewports ([26a4aa6](https://github.com/stencila/thema/commit/26a4aa6cd56114822a5399e8f1d31b6d51bde945))
* **Elife:** Add download icon for wider viewports ([43b4c1e](https://github.com/stencila/thema/commit/43b4c1e00ffa79c1d9fc79311e1e6e935d880c35))
* **Elife:** Match eLife's download link text ([3aac9fe](https://github.com/stencila/thema/commit/3aac9feaa19299a0e1f22e38940d4e3c8843b640))
* **Elife:** Right align download menu link, & spacing ([b49c2d2](https://github.com/stencila/thema/commit/b49c2d21574345076c3c9424b97b5944266893f7))

# [2.5.0](https://github.com/stencila/thema/compare/v2.4.0...v2.5.0) (2020-04-29)


### Bug Fixes

* **Elife:** Match update ([deb655b](https://github.com/stencila/thema/commit/deb655ba1ecc0d03b826ed929e92dee04d384487))
* **Elife:** Target downloads section, now its targetable ([fa65315](https://github.com/stencila/thema/commit/fa653155d099ec3f90b4d5d4387e646093218595))


### Features

* **Elife:** Dotted underline per download link ([ba1932b](https://github.com/stencila/thema/commit/ba1932b83d0a4e1c973ebca2007b576b4a04dee9))
* **Elife:** Download list hover color ([92b6c1b](https://github.com/stencila/thema/commit/92b6c1b342c196b66e94a2d4ac967795ee7a0b22))
* **Elife:** Downloads link targetable by CSS ([ebeca8c](https://github.com/stencila/thema/commit/ebeca8c7060a288edbbe43bb6c88af84e3e3f370))

# [2.4.0](https://github.com/stencila/thema/compare/v2.3.0...v2.4.0) (2020-04-29)


### Features

* **Elife:** Style references ([f0a4fe4](https://github.com/stencila/thema/commit/f0a4fe4ff432d6d2e65a9e5680beb12edc6b135c))

# [2.3.0](https://github.com/stencila/thema/compare/v2.2.9...v2.3.0) (2020-04-27)


### Bug Fixes

* **Elife:** Article date line-height ([fba0ff8](https://github.com/stencila/thema/commit/fba0ff83ffb3151c46c7850e49c0226344c91365))


### Features

* **Elife:** Centre 'content header' elements, ignore references ([3554232](https://github.com/stencila/thema/commit/35542320b73a28320df31ce84134c4b2ba89b129))
* **Elife:** No affiliations at narrower viewports ([268dd32](https://github.com/stencila/thema/commit/268dd32afeb6539a843e80f0cd109f4c04ddcc1d))
* **Elife:** Responsive title typography ([d01c883](https://github.com/stencila/thema/commit/d01c883ce463ce3b10f40f9eb6dc1c6b204f0ed2))

## [2.2.9](https://github.com/stencila/thema/compare/v2.2.8...v2.2.9) (2020-04-23)


### Bug Fixes

* Remove .large--eight-twelfths ([76f43d7](https://github.com/stencila/thema/commit/76f43d7e76d11a9150bf59783cbe0f17bcf954ee))

## [2.2.8](https://github.com/stencila/thema/compare/v2.2.7...v2.2.8) (2020-04-23)


### Bug Fixes

* **Elife:** Move downloads into own section ([d2dc565](https://github.com/stencila/thema/commit/d2dc56523c0384cc48fd46d123f176817c108388))

## [2.2.7](https://github.com/stencila/thema/compare/v2.2.6...v2.2.7) (2020-04-15)


### Bug Fixes

* **dependencies:** update dependency @stencila/components to ^0.11.0 ([ee2ed55](https://github.com/stencila/thema/commit/ee2ed55eacecc1518d5fb251106ec2b130a37f17))

## [2.2.6](https://github.com/stencila/thema/compare/v2.2.5...v2.2.6) (2020-04-14)


### Bug Fixes

* **Visual Regression:** Update Chrome version for visual testing ([1a77ce8](https://github.com/stencila/thema/commit/1a77ce83efd1e72ed8f5ee4f3e76f392ef3e010c))

## [2.2.5](https://github.com/stencila/thema/compare/v2.2.4...v2.2.5) (2020-04-09)


### Bug Fixes

* **Build:** Fix `lib` module generation from Webpack ([ae460a6](https://github.com/stencila/thema/commit/ae460a6666248ca46ac9edf91bcf6cefa3ff1095))

## [2.2.4](https://github.com/stencila/thema/compare/v2.2.3...v2.2.4) (2020-04-09)


### Bug Fixes

* **Build:** Use Webpack for all build targets for consistency ([99606f9](https://github.com/stencila/thema/commit/99606f965ce264566800b644eb1331e3c0b72251))

## [2.2.3](https://github.com/stencila/thema/compare/v2.2.2...v2.2.3) (2020-04-08)


### Bug Fixes

* **Build:** Fix ts-node theme import failing package genereation ([2981366](https://github.com/stencila/thema/commit/2981366704b4fb4c348cd88d740be42d4c73df41))

## [2.2.2](https://github.com/stencila/thema/compare/v2.2.1...v2.2.2) (2020-04-07)


### Bug Fixes

* **Thema:** Simplify Thema version resolution logic ([31ce7d0](https://github.com/stencila/thema/commit/31ce7d0d6bee37527cb2f32270ce5845d7c983b7))

## [2.2.1](https://github.com/stencila/thema/compare/v2.2.0...v2.2.1) (2020-04-06)


### Bug Fixes

* **WDIO:** Fix visual regression tests to work with updated Theme Editor ([c08ed62](https://github.com/stencila/thema/commit/c08ed62a35ded1e71ab2a03d312b5c5c4a981f60))

# [2.2.0](https://github.com/stencila/thema/compare/v2.1.0...v2.2.0) (2020-04-03)


### Bug Fixes

* **Elife:** Make build complete after merging from upstream ([b35092f](https://github.com/stencila/thema/commit/b35092ff1a7f7a575f22e0521389376fac3abe66))
* **Elife:** Typo in papers url; strip comment ([a98610b](https://github.com/stencila/thema/commit/a98610bad5fe7b22f595393efac2637260f30bba))
* **Extension:** Add missing import ([daf0959](https://github.com/stencila/thema/commit/daf0959d64157748424d3ecb1e5e6699aea7a345))


### Features

* **Elife:** Add data provider to report status of API request ([65a1627](https://github.com/stencila/thema/commit/65a1627a1e5f1f1ecb949d555fe92e45d65c738d))
* **Elife:** Add PDF download links ([f839fb8](https://github.com/stencila/thema/commit/f839fb8f2e8e06bd1c37b200435dc62d0f42c8ae))
* **Elife:** Begin download list skeleton ([d802289](https://github.com/stencila/thema/commit/d802289fc210269ccf37062f8215827d74862ee2))
* **Elife:** Build more of the downloads list ([7e540e3](https://github.com/stencila/thema/commit/7e540e3a62535a76860142d2d359bb17610d0b14))
* **Elife:** Data provider throws on invalid eLife article id ([0b445a5](https://github.com/stencila/thema/commit/0b445a52f3585cf5f6ee719fddfe17859a9ab4be))
* **Elife:** Expose the article PDF URI ([4d0f766](https://github.com/stencila/thema/commit/4d0f766e176d7324768bc67290a308c50b883afe))
* **Elife:** Expose the figures PDF URI ([8a1b1db](https://github.com/stencila/thema/commit/8a1b1db95de8c4af3234ad0b31f88733a898b48c))
* **Elife:** Obtain article id & use in download menu links ([87df483](https://github.com/stencila/thema/commit/87df483f8b334913349f24a2a6ad567d5800e790))
* **Elife:** Only one h1 per page ([b8d2267](https://github.com/stencila/thema/commit/b8d226726a8d9773ca3f13836e3850450c5a8f92))
* **Elife:** Remove obsolete CiteULike ref ([746eace](https://github.com/stencila/thema/commit/746eaceedaf5a029dcabf81172bdb5c045d15cc1))
* **Elife:** Use Response's ok property in place of status ([b785399](https://github.com/stencila/thema/commit/b7853998caf78a7964ce6cf17d9a456c15d5ec0e))

# [2.1.0](https://github.com/stencila/thema/compare/v2.0.1...v2.1.0) (2020-04-03)


### Bug Fixes

* **Elife:** Add space to pass lint test ([2d6a694](https://github.com/stencila/thema/commit/2d6a694bfa83366767477f7cdb2e0a800019edc8))
* Add letter-spacing as custom property ([2ca8c44](https://github.com/stencila/thema/commit/2ca8c443c1662be525db5c93735aee6e6f628b6b))


### Features

* Add styling for date publication ([0587dd6](https://github.com/stencila/thema/commit/0587dd624040c546df87cc77a485b8a35f8f8bdb))

## [2.0.1](https://github.com/stencila/thema/compare/v2.0.0...v2.0.1) (2020-04-01)


### Bug Fixes

* **dependencies:** update dependency @stencila/components to ^0.10.1 ([7ccdc58](https://github.com/stencila/thema/commit/7ccdc58f3588ce88ebab04135ed3a2cde4a54a76))
* **dependencies:** update react monorepo to ^16.13.1 ([f7d911e](https://github.com/stencila/thema/commit/f7d911e08ff3fdc64cb6016d2e812b6e79c960e3))

# [2.0.0](https://github.com/stencila/thema/compare/v1.16.1...v2.0.0) (2020-03-31)


* Merge pull request #122 from stencila/next ([bdf95b8](https://github.com/stencila/thema/commit/bdf95b83c55f63549eed79044b166531a02fa84b)), closes [#122](https://github.com/stencila/thema/issues/122)


### BREAKING CHANGES

* Return to master and release `v2.0.0`

## [1.16.1](https://github.com/stencila/thema/compare/v1.16.0...v1.16.1) (2020-03-26)


### Bug Fixes

* **Elife:** Match Encoda date semantics & be defensive ([09707f6](https://github.com/stencila/thema/commit/09707f62dbdd0088491e52d7c7d44a8e7931f86d))

# [1.16.0](https://github.com/stencila/thema/compare/v1.15.2...v1.16.0) (2020-03-26)


### Bug Fixes

* **Galleria:** Fix grid layout at medium breakpoints ([3228bc0](https://github.com/stencila/thema/commit/3228bc0cdef3a667085bb2e8505f6cc23c1af0f4))


### Features

* Hide article identifiers section ([cc54727](https://github.com/stencila/thema/commit/cc54727d241a49e6e6d86288137c0a4e291cdc2e))
* **Elife:** Hide article identifiers section ([0bfc95f](https://github.com/stencila/thema/commit/0bfc95f6d593b0206e86ae353ffe358e0aba95b4))

## [1.15.2](https://github.com/stencila/thema/compare/v1.15.1...v1.15.2) (2020-03-26)


### Bug Fixes

* **Demo:** Add missing Stencila Components JS files to preview documents ([9ef8939](https://github.com/stencila/thema/commit/9ef8939860343de592372bdde78fb7c0d44c34dd))
* **RPNG:** Collapse source code panels in RPNG theme ([a15e6d5](https://github.com/stencila/thema/commit/a15e6d5e65f0a448fbc6860e143c0666898a5d2c))

## [1.15.1](https://github.com/stencila/thema/compare/v1.15.0...v1.15.1) (2020-03-16)


### Bug Fixes

* **Cite-APA Extension:** Add styling for pageStart, pageEnd, and pagination ([544b8d6](https://github.com/stencila/thema/commit/544b8d6ac9132462ed078c7102215956b06e506b))
* **Dependencies:** Upgrade Encoda and remove DOM manipulations no longer needed ([ea70ac2](https://github.com/stencila/thema/commit/ea70ac20160df9c70d91de1e784af3b7262077f5))
* **Extensions:** Upgrade Encoda and remove redundant scripts ([75dcbbf](https://github.com/stencila/thema/commit/75dcbbfb7f41cc50603b67f09fae57deb849050f))
* **Extensions, Skeleton theme:** Changes related to upgrading Encoda ([40694a2](https://github.com/stencila/thema/commit/40694a24616e8488cb6e474c0e5384e57a011e02))
* **Gallery:** Hide datePublished and update to  new schema for list items ([56fe408](https://github.com/stencila/thema/commit/56fe408bcffc41ae4b72d46b3156c13f60d50c0c))
* **Gallery:** Use isStandalone and content ([7f1ae28](https://github.com/stencila/thema/commit/7f1ae28455e7cb43a36c7a5da8ada1e0a0aef706))
* **References:** Fix irregular spacing for Author references ([ddece32](https://github.com/stencila/thema/commit/ddece32435eb047c27006ff12e056898c0f04a76))
* **Skeleton:** Fix Headings inside non-root elements being too wide ([f775d96](https://github.com/stencila/thema/commit/f775d96cbdf8a63b65eb999f6ecd34796eb7eb64))
* **Wilmore:** Fix Code, Math, DataPublished node formatting & styles ([1a9f528](https://github.com/stencila/thema/commit/1a9f528ba95265266edbdc96074348159249b2f2))

# [1.15.0](https://github.com/stencila/thema/compare/v1.14.2...v1.15.0) (2020-03-12)


### Features

* **Theme Editor:** Add ability to hide UI elements from the preview ([3d9c182](https://github.com/stencila/thema/commit/3d9c1821d9847ce524b77dabbe5e751044f4ff11))

## [1.14.2](https://github.com/stencila/thema/compare/v1.14.1...v1.14.2) (2020-03-11)


### Bug Fixes

* **Build:** Avoid discarding lib due to running Build:browser twice ([8f0c05d](https://github.com/stencila/thema/commit/8f0c05dcbabe2dc3d1d56f1b5eb85e9f46c67b64))

## [1.14.1](https://github.com/stencila/thema/compare/v1.14.0...v1.14.1) (2020-03-10)


### Bug Fixes

* **Theme Editor:** Allow serving from sub-dir by setting env.ASSET_PATH ([363ab07](https://github.com/stencila/thema/commit/363ab0783d40927c585e56d104dd93eff7edd6d3))
* **Theme Editor:** Fix file globs for Demo build ([9c7dd64](https://github.com/stencila/thema/commit/9c7dd6496f48cb493cd674bad694b77cfca2a798))

# [1.14.0](https://github.com/stencila/thema/compare/v1.13.0...v1.14.0) (2020-03-09)


### Bug Fixes

* **Editor:** Catch color picker errors ([3f0607a](https://github.com/stencila/thema/commit/3f0607aea835cb9ad92d1c7cc6d57fc5da915b96))
* **Editor:** Commit chosen colour when closing colour picker ([e2173b0](https://github.com/stencila/thema/commit/e2173b0436cd145f0bbaca08c3a98c9f844bb382))
* **Editor:** Don't discard parameters from URL when changing themes ([2479846](https://github.com/stencila/thema/commit/24798464b501f08fb89524f30604d23e7b5a38c6))
* **Editor:** Fix asset resolution for example articles ([160c892](https://github.com/stencila/thema/commit/160c89283fe8f6d2865047e4fb0d537b0140ccd9))
* **Editor:** Fix manual color entry conflicts with Color Picker ([20f216d](https://github.com/stencila/thema/commit/20f216d4e62aa9db8b233f205eb1adecd197e0c4))
* **Skeleton, Stencila:** Fix nested CSS variables not being evaluated ([a49a4f8](https://github.com/stencila/thema/commit/a49a4f8fee42b74235f7206656a4b08316786f6d))
* **Theme Contribution:** Fix generation of contributed CSS variable ([d31909e](https://github.com/stencila/thema/commit/d31909e4150e3b6fd91dd69866e219cb5d72fc1d))


### Features

* **Demo:** Add & style theme gallery landing page ([edc9653](https://github.com/stencila/thema/commit/edc9653ac25e0fedc5feb912fb288a04f943b139))
* **Demo:** Add theme contribution modal ([9bae762](https://github.com/stencila/thema/commit/9bae7625a6a1d57f95a1362b95a94bd8503c4474))
* **Editor:** Add hover state for gallery thumbnails ([f08f194](https://github.com/stencila/thema/commit/f08f1946abd356ba38ba1539891ff4a0b154632d))
* **Editor:** Add theme info above customization settings ([50f096a](https://github.com/stencila/thema/commit/50f096a43e35e91b41a0dd24fb4fa0a907109ab6))
* **Editor:** Auto focus & format theme name when contributing ([c060c6e](https://github.com/stencila/thema/commit/c060c6e03bbbe8c884f28eae08b1056b5efba5ad))
* **Galleria theme:** Add theme for styling gallery pages ([ad87a7a](https://github.com/stencila/thema/commit/ad87a7a9d9ba26a087a9dc8398384f98a0848d1b))
* **Gallery:** Add script to generate docs/gallery ([da500b3](https://github.com/stencila/thema/commit/da500b3927871ff64dbc363c4e94e16ac9a9111b))
* **Theme Builder:** Inject Stencila Components scripts into preview ([31726e1](https://github.com/stencila/thema/commit/31726e165323cf8c01634ad199e6d5a74c981a81))
* **Theme Builder:** Inject user updated variables into preview ([4096bb2](https://github.com/stencila/thema/commit/4096bb221679d1c3b782f745532e0b7ba03b9c6c))
* **Theme Builder:** User can save new theme as a Github PR ([e80e2e7](https://github.com/stencila/thema/commit/e80e2e703420f5718b3b905851c281df5d4fde45))
* **Themes:** Checking and fixing of themes ([cc4f4c1](https://github.com/stencila/thema/commit/cc4f4c19dcafe43b772519d19f72d5ef1a800e7d))


### Performance Improvements

* **Demo:** Reduce number of needless re-renders ([15910f1](https://github.com/stencila/thema/commit/15910f1ac5cafd424f8e69936f86241bd05eb271))
* **Editor:** Don't reload iframe if already on chosen example content ([3250c8b](https://github.com/stencila/thema/commit/3250c8b1356c967a76ff3beb2eb6fc7dcf716e10))
* **Editor:** Prevent needlessly re-rendering page header ([743a66d](https://github.com/stencila/thema/commit/743a66dfe54a8f17b22051f788ae8305ded7b5cf))

# [1.13.0](https://github.com/stencila/thema/compare/v1.12.0...v1.13.0) (2020-03-09)


### Features

* **Date:** Format eLife's publication date correctly ([d0603a2](https://github.com/stencila/thema/commit/d0603a2f7ac0e7a66e779ba5dea09d3b81f760a3))

# [1.12.0](https://github.com/stencila/thema/compare/v1.11.0...v1.12.0) (2020-03-04)


### Features

* **CSS:** Reintroduce postcss mixins to build ([53088da](https://github.com/stencila/thema/commit/53088daccfccbb23b2665a460b639fd4a5fb5e7b))
* **Elife:** Style affiliations ([d18f1f4](https://github.com/stencila/thema/commit/d18f1f48f9911481c9ac2d987acc9df03ff1ec3f))
* **Elife:** Style affiliations list ([eaccd12](https://github.com/stencila/thema/commit/eaccd12fe3fc78d1432b1d9624c576cc3cad35bf))

# [1.11.0](https://github.com/stencila/thema/compare/v1.10.0...v1.11.0) (2020-03-02)


### Bug Fixes

* **Cite extension:** Restructure and reorder reference properties ([0d6e918](https://github.com/stencila/thema/commit/0d6e91857c062fca6c66016ad4e61e144f8fdf09))
* **Person extension:** DOM manipulations for more style-able names ([cbdc70a](https://github.com/stencila/thema/commit/cbdc70a000148e26473a6bcaa15199cc13862677))
* **Ready function:** Use not loading, instead of complete ([b61ceb1](https://github.com/stencila/thema/commit/b61ceb1a8d98f4ccbd15fee5a1242b6512abd954))
* **Utility function:** Better type safety and more flexibility for create and append ([7ef4cdd](https://github.com/stencila/thema/commit/7ef4cdd0f1fe9660b108bc058596a7edde7affda))
* **Utility functions:** Allow for camelCase property names ([e7a673b](https://github.com/stencila/thema/commit/e7a673beae7634648870b1d5a92fd9daa6dee3b8))


### Features

* **Heading extension:** Add in leiu of longer tem fix in Encoda ([56619ee](https://github.com/stencila/thema/commit/56619eeb342c12a988f1ab4c7c08cdb2304adc23))
* **Utility functions:** Add tag() and attrs(); return undefineds ([71820f7](https://github.com/stencila/thema/commit/71820f77fe9ed6665279f09b5262db1c088fe14e))

# [1.10.0](https://github.com/stencila/thema/compare/v1.9.0...v1.10.0) (2020-02-28)


### Bug Fixes

* **Browser support:** Transform CSS4 :not() usage to CSS3 spec ([1317b7c](https://github.com/stencila/thema/commit/1317b7ca52e37b954a92ce8930335ff8ab6cdd1e))
* **HMR:** Fix stack overflow due to double HMR instances ([190a891](https://github.com/stencila/thema/commit/190a891e9cad4f7285e55c4f2daeac1bce5d1128))
* **Nature:** Fix monospace font-family name ([97f92ae](https://github.com/stencila/thema/commit/97f92ae797286a78c5b66b891dc15940fb08f754))
* **README:** Fix generation of MD table for list of Themes and Extension ([5039e41](https://github.com/stencila/thema/commit/5039e411aa5b6749b11ee64db64f2bfac6dc3f7d))


### Features

* **Selectors:** Generate PrismJS compatible code selectors ([5f34f55](https://github.com/stencila/thema/commit/5f34f55e1e419068a2f06a12b22802163cae06af))
* **Selectors:** Generate utility selectors for selecting element groups ([49f3d38](https://github.com/stencila/thema/commit/49f3d389f2d4547dbbcfd7efd50cd8969b532c79))
* **Skeleton:** Add basic styling to Skeleton theme ([afffdbd](https://github.com/stencila/thema/commit/afffdbd6811ff6a2cc6a5951beac33712d848923))
* **Stencila/Wilmore:** Fork and replace existing Stencila theme ([5bd5162](https://github.com/stencila/thema/commit/5bd5162744a76eee86e146524b2f4c4338aaf02e)), closes [#70](https://github.com/stencila/thema/issues/70)
* **Stylelint:** Allow targeting Stencila WebComponents ([4d4e079](https://github.com/stencila/thema/commit/4d4e0793c2b36afe8374922492b55a93bc403d3c))

# [1.9.0](https://github.com/stencila/thema/compare/v1.8.0...v1.9.0) (2020-02-28)


### Features

* **Elife:** Add author separator ([f1be75d](https://github.com/stencila/thema/commit/f1be75dd999587dc05d5c8cce3d19ef8e8928b2c))
* **Elife:** Temporarily remove author afflilation indicator ([1f75003](https://github.com/stencila/thema/commit/1f75003e057f122affd9ed4a0b14c84fe57b6bbb))
* **Elife:** Use eLife corresponding author envelope icon ([0a72a90](https://github.com/stencila/thema/commit/0a72a9005d880808b2fd733258c215873d1c5064))
* **Elife:** Use Person extension to style authors ([a2a9ba6](https://github.com/stencila/thema/commit/a2a9ba6b711561e223cdbc4f9d966ea419f18235))

# [1.8.0](https://github.com/stencila/thema/compare/v1.7.2...v1.8.0) (2020-02-28)


### Bug Fixes

* **Elife:** Don't duplicate font blocks ([f7ba6ec](https://github.com/stencila/thema/commit/f7ba6eccb4a96ac1f43359aa78a17d9f95564f3b))


### Features

* **Fonts:** Use Noto Sans SemiBold for eLife headings ([bd38d09](https://github.com/stencila/thema/commit/bd38d096f2466ee17d26c651d12229675a2548dd))

## [1.7.2](https://github.com/stencila/thema/compare/v1.7.1...v1.7.2) (2020-02-26)


### Bug Fixes

* **CSS:** Malformed custom property usage ([e69dcd5](https://github.com/stencila/thema/commit/e69dcd5cec2c798b9192403e063e58774fa95a0f))

## [1.7.1](https://github.com/stencila/thema/compare/v1.7.0...v1.7.1) (2020-02-25)


### Bug Fixes

* **Semantic Selector:** Fix CSS syntax when generating selectors ([4963cc6](https://github.com/stencila/thema/commit/4963cc6739fa40352dc7d93f626d226b9b60fad6))

# [1.7.0](https://github.com/stencila/thema/compare/v1.6.4...v1.7.0) (2020-02-25)


### Bug Fixes

* **Utility functions:** Require spaces between attributes; better support for custom selectors ([f45abb9](https://github.com/stencila/thema/commit/f45abb901c0e9f271be3fcfd70669dde4094a2c1))


### Features

* **Utility functions:** Add more, test and document ([8b8abb8](https://github.com/stencila/thema/commit/8b8abb81dcc93b4063e637415c1d14ddefff4405))

## [1.6.4](https://github.com/stencila/thema/compare/v1.6.3...v1.6.4) (2020-02-24)


### Bug Fixes

* **Selectors:** Upgrade Schema version and regenerate selectors ([9eb59da](https://github.com/stencila/thema/commit/9eb59dab7b5232f02b2c320b933cf0e9746cc77f))
* **Themes:** Fix invalid custom selectors ([c972fcd](https://github.com/stencila/thema/commit/c972fcd89c01342c7fd50e11c351628eed173aba))

## [1.6.3](https://github.com/stencila/thema/compare/v1.6.2...v1.6.3) (2020-02-23)


### Bug Fixes

* **Docs:** Re-evaluate theme JavaScript when switching themes ([befaa76](https://github.com/stencila/thema/commit/befaa7635bed00953ee182d8a2b1c7675e6417e5))
* **Package:** Setup for sepearate browser and lib distributions ([2ba3594](https://github.com/stencila/thema/commit/2ba35944b40f48188d8c646ddbca44307a32136a))

## [1.6.2](https://github.com/stencila/thema/compare/v1.6.1...v1.6.2) (2020-02-22)


### Bug Fixes

* **Build:** Fix production build failure due to missing plugin ([5aed49f](https://github.com/stencila/thema/commit/5aed49f1b8e8e0af4e7fb5a37db83d1bbae67572))

## [1.6.1](https://github.com/stencila/thema/compare/v1.6.0...v1.6.1) (2020-02-21)


### Bug Fixes

* **Package:** Use prepare instead of postinstall ([1be7091](https://github.com/stencila/thema/commit/1be70914be65c9e3ace8be16b3e3e17f778f9d23))

# [1.6.0](https://github.com/stencila/thema/compare/v1.5.6...v1.6.0) (2020-02-21)


### Bug Fixes

* **Bootstrap theme:** Do not use mixins from shared; docs ([8347907](https://github.com/stencila/thema/commit/83479076db951895593bbb9de3baf1f8eaff16a6))
* **Build:** Fix build issues due to circular dependencies ([4d7c13e](https://github.com/stencila/thema/commit/4d7c13e773c839348016b95b470f28e73dd3ca64))
* **Code extension:** Fix itemtype; add default language; do not style executable nodes ([1315c67](https://github.com/stencila/thema/commit/1315c67d352d52da5bec39959ea974957b73e725))
* **Components:** Load components in index.html ([a32262a](https://github.com/stencila/thema/commit/a32262a3ebcafbb06152b70c6a826e4e1f0fb0dd))
* **Demo:** Generate examples standalone ([a2eb9f1](https://github.com/stencila/thema/commit/a2eb9f1a788e03168a08810c45a6e242a18ca15c))
* **Demo:** Initialize theme each time it, and  example, set ([801a7e9](https://github.com/stencila/thema/commit/801a7e99c22de83ae4dfbea971274bbcc2ddac8b))
* **Demo:** Make demo paths relative for use on GH Pages ([07d980a](https://github.com/stencila/thema/commit/07d980a57b49ad93eb871d6c7d34d2f615a7aadc))
* **Docs:** Fix Publication step on TravisCI ([35cfad0](https://github.com/stencila/thema/commit/35cfad0097e5f0488dadc8c87d7aad7a01419a23))
* **eLife theme:** Changes to dir names and selectors ([6ef7ac2](https://github.com/stencila/thema/commit/6ef7ac22ae732d4632d015be5cf719b8730dcd4f))
* **Examples:** Actually run the functions ([0907a34](https://github.com/stencila/thema/commit/0907a34e71d271122879d28cc6c746f18690b0ea))
* **Extensions:** Only quote name when need to ([f189065](https://github.com/stencila/thema/commit/f1890657f2073b4b0e8b0a53e85db7862c5fd6ca))
* **Generate:** Use Promise<unknown> when generating themes ([87736d1](https://github.com/stencila/thema/commit/87736d15422f1824cf351ef828230d495b278475))
* **Hooks:** Update pre-commit script name to match renamed script ([cc69db8](https://github.com/stencila/thema/commit/cc69db80016f6a7dd3c70b4d7d155c374dec9f57))
* **Hooks:** Update pre-commit script name to match renamed script ([4814aea](https://github.com/stencila/thema/commit/4814aea723ae1f400ac3ac7f45e891a3f866e0c6))
* **Javascript:** Allow themes to be loaded in Node.js ([4f307e5](https://github.com/stencila/thema/commit/4f307e55cabf483df75521e9580ba96dcbe0cb54))
* **Linting:** Add Stylelint to enforce semantic selector usage ([a6a4b89](https://github.com/stencila/thema/commit/a6a4b8961236e4e35f5d299821acf63483159350))
* **References:** Fix Reference formatting selectors and type castings ([b3e23e1](https://github.com/stencila/thema/commit/b3e23e1b9e53688a2a8ada78928dbf729a8727ad))
* **Selectors:** Fix selectors import path in configuration ([c37e331](https://github.com/stencila/thema/commit/c37e3319757b9b9847eed99fc3b3d4c8682798b6))
* **Selectors:** Match Headings & elements with multiple itemtypes ([d35e8f1](https://github.com/stencila/thema/commit/d35e8f1139ef91df63de242facb09bf33a701692))
* **Selectors:** Prevent Prettier from mangling Custom Selectors ([45ae358](https://github.com/stencila/thema/commit/45ae3589c82d67f7e9fb9f1fa9c7a20b6b66f157))
* **Selectors:** Reove trailing newline to avoid stylelint error ([08728e1](https://github.com/stencila/thema/commit/08728e16d89443c7739c6627bbce47c22ad61bf2))
* **Selectors:** Update selectors after upgrade of Schema version ([b37c2fb](https://github.com/stencila/thema/commit/b37c2fb5a8451eebc3947c35659b23160d0865cf))
* **Selectors:** Update selectors to also target data- prefixed versions ([4306d68](https://github.com/stencila/thema/commit/4306d687172d1eeb31ac83d81d8e811c9a6406e6))
* **Skeleton:** Do not rely on anything in shared; add README; linting ([7b238c3](https://github.com/stencila/thema/commit/7b238c358fec0ad135c1199e0a7995fac99cfe63))
* **Skeleton:** Ensure index.ts is a module ([d1d941e](https://github.com/stencila/thema/commit/d1d941ec70b9bbd068cea5e34d801f8a9362bf0b))
* **Themes:** Remove zombie theme ([15d336e](https://github.com/stencila/thema/commit/15d336e854f2cdca6411f2fe27512d39d504fa84))
* **Types:** Type root ([f4e8160](https://github.com/stencila/thema/commit/f4e816056f45a0933c53df7be23d64094cde6434))


### Features

* **Bootstrap:** Add bootsrap theme ([68d42ec](https://github.com/stencila/thema/commit/68d42ec94b271ecf6adafad1041c997ee31068f7))
* **Build:** Combine & sort media queries ([16ed2b6](https://github.com/stencila/thema/commit/16ed2b6941a2fac4d866efdcdcd442570f8ffcb6))
* **Mathjax CSS:** Add generation of MathJax CSS ([d1fda5d](https://github.com/stencila/thema/commit/d1fda5d519c558fa1da27ed6df1b6012c1c1789d))
* **Nature:** Refactor and update Nature theme to emulate new branding ([d552f57](https://github.com/stencila/thema/commit/d552f57be5c96745a36e39d04bc819524ac53b1f))
* **Pages extension:** Add the pages extension ([eb64e1a](https://github.com/stencila/thema/commit/eb64e1adb55ff9700b1eceacbd616319bfa799cb)), closes [#23](https://github.com/stencila/thema/issues/23)
* **PLOS:** Update theme with new semantic selectors ([ca36008](https://github.com/stencila/thema/commit/ca36008dcb828014d910df6af39a3928c086a1f0))
* **Prism addon:** Add prisom addon for syntax highlighting ([967fe53](https://github.com/stencila/thema/commit/967fe537ce567b9ea6906b2fa7588e610c38ce3a))
* **RPNG Theme:** Add theme for generating RPNGs. ([c5b18b7](https://github.com/stencila/thema/commit/c5b18b75d3bb1d1bd0d76c079cfdd29d41ea3bac)), closes [#31](https://github.com/stencila/thema/issues/31)
* **Selector functions:** Add module for handling custom selectors ([59be9e9](https://github.com/stencila/thema/commit/59be9e9ff450c1b141aac762a31dbd0a10494576))
* **Selectors:** Autogenerate semantic selectors from Stencila Schema ([8c5862c](https://github.com/stencila/thema/commit/8c5862c4bb8ec26586f01db13a82a34e6b1378cc))
* **Selectors:** Draft: Auto-Generate semantic selectors ([1caacfd](https://github.com/stencila/thema/commit/1caacfd5fc6fe55dfe06f533e2d5be5f6a715296))
* **Shared JS:** Add functions for DOM manipulation ([01d6d71](https://github.com/stencila/thema/commit/01d6d71271a48ded4f4b7c6b652c9495d117a88c))
* **Shared scripts:** Add DOM manipulation fixes ([c049b5f](https://github.com/stencila/thema/commit/c049b5fc5f996a506e7e4b88cb2198a96b089742))
* **Skeleton:** Add Skeleton starter theme ([c70dbb4](https://github.com/stencila/thema/commit/c70dbb41f025a2a9a3fa3aca73113e05ae62fccc))
* **Skeleton theme:** Add all existing addons ([e73d853](https://github.com/stencila/thema/commit/e73d8530d8dddb2523444d35d04c1be367bbdaeb))
* **Stencila components addon:** Addon for adding Stencila Web Components for document nodes ([65d84a9](https://github.com/stencila/thema/commit/65d84a9070fa0658673b57623acdb93041dc93a4))
* **Themes:** Add a script to create a new theme ([5081903](https://github.com/stencila/thema/commit/5081903e28777c26786d1dbed554096a29b08e47))
* **Themes:** Horizontally centre eLife article ([e7fc6a7](https://github.com/stencila/thema/commit/e7fc6a78e22c174077894a8f0bd4b65f7d561cc2))
* **Variables:** Add a shared layer of variables for all themes ([15bb7da](https://github.com/stencila/thema/commit/15bb7da6dcd9893f3b6ebf38cd5b2681e5a0989b))


### Performance Improvements

* **CSS:** Reduce file sizes by using CSSNano during builds ([87f7b2b](https://github.com/stencila/thema/commit/87f7b2b1092a9ea0b3166665f63acc76894c3527))

## [1.5.6](https://github.com/stencila/thema/compare/v1.5.5...v1.5.6) (2019-10-11)


### Bug Fixes

* **Stencila:** Fix vertical spacing for nested lists after paragraphs ([2ef401a](https://github.com/stencila/thema/commit/2ef401a))

## [1.5.5](https://github.com/stencila/thema/compare/v1.5.4...v1.5.5) (2019-10-09)


### Bug Fixes

* **Examples:** Update Simple example with new component tag names ([e1b738e](https://github.com/stencila/thema/commit/e1b738e))
* **Stencila:** Fix short paragraphs being centre aligned ([236f1e7](https://github.com/stencila/thema/commit/236f1e7))
* **Stencila:** Reduce max-width of CodeChunk components ([5ee20b0](https://github.com/stencila/thema/commit/5ee20b0))

## [1.5.4](https://github.com/stencila/thema/compare/v1.5.3...v1.5.4) (2019-10-07)


### Bug Fixes

* **Pre:** Fix Safari bug with rendering Pre elements inside iFrames ([6b5c8b0](https://github.com/stencila/thema/commit/6b5c8b0))

## [1.5.3](https://github.com/stencila/thema/compare/v1.5.2...v1.5.3) (2019-10-07)


### Bug Fixes

* **Citations:** Handle race condition with formatReferences ([38c6386](https://github.com/stencila/thema/commit/38c6386))
* **CodeChunk:** Show x-scrollbars for overflowing codechunks ([5039d15](https://github.com/stencila/thema/commit/5039d15))
* **Common Styles:** Move description/abstract from themes to common.css ([b2eab4b](https://github.com/stencila/thema/commit/b2eab4b))
* **CreativeWork:** Don't add extraneous commas in reference authors ([3967e65](https://github.com/stencila/thema/commit/3967e65))
* **eLife:** Handle YAML frontmatter for authors, organizations, abstract ([375f54c](https://github.com/stencila/thema/commit/375f54c))
* **Nature:** Adjust theme to handle YAML frontmatter + CodeChunks ([802cfcf](https://github.com/stencila/thema/commit/802cfcf))
* **Themes:** Refinements for eLife, Nature, PLOS themes ([80dac6d](https://github.com/stencila/thema/commit/80dac6d))
* **Themes:** Use semantic selectors, comment setTimeout usage ([9b2da0c](https://github.com/stencila/thema/commit/9b2da0c))

## [1.5.2](https://github.com/stencila/thema/compare/v1.5.1...v1.5.2) (2019-09-29)


### Bug Fixes

* **Selectors:** Fix custom selectors ([7bd1398](https://github.com/stencila/thema/commit/7bd1398))
* **Selectors:** Rename code-chunk to CodeChunk ([70e669f](https://github.com/stencila/thema/commit/70e669f))

## [1.5.1](https://github.com/stencila/thema/compare/v1.5.0...v1.5.1) (2019-09-12)


### Bug Fixes

* **Demo:** Reflect active theme/article in dropdown when reloading ([8e050b9](https://github.com/stencila/thema/commit/8e050b9))
* **JS:** Initalize JS even if script is loaded after DOMContentLoaded ([7639b4b](https://github.com/stencila/thema/commit/7639b4b))
* **Stencila:** Add common theme dependencies ([4c856bd](https://github.com/stencila/thema/commit/4c856bd))

# [1.5.0](https://github.com/stencila/thema/compare/v1.4.3...v1.5.0) (2019-09-12)


### Features

* Add & refine styles for CodeChunk component ([14b2f19](https://github.com/stencila/thema/commit/14b2f19))

## [1.4.3](https://github.com/stencila/thema/compare/v1.4.2...v1.4.3) (2019-09-10)


### Bug Fixes

* **Build:** Refactor TS modules and fix build task ([4f0815b](https://github.com/stencila/thema/commit/4f0815b))

## [1.4.2](https://github.com/stencila/thema/compare/v1.4.1...v1.4.2) (2019-09-10)


### Bug Fixes

* Fix selectors used in references for chnages in Encoda ([854f427](https://github.com/stencila/thema/commit/854f427))
* Use headline custom selector ([9864393](https://github.com/stencila/thema/commit/9864393))
* **Selectors:** Update selectors ([50c14a9](https://github.com/stencila/thema/commit/50c14a9))
* **Stencila theme:** Ensure init function ([602550a](https://github.com/stencila/thema/commit/602550a))

## [1.4.1](https://github.com/stencila/thema/compare/v1.4.0...v1.4.1) (2019-08-30)


### Bug Fixes

* **TypeScript:** Fix getTheme function logic ([39652d6](https://github.com/stencila/thema/commit/39652d6))

# [1.4.0](https://github.com/stencila/thema/compare/v1.3.0...v1.4.0) (2019-08-30)


### Features

* **TypeScript:** Generate TS declarations & export theme names ([be71bd0](https://github.com/stencila/thema/commit/be71bd0))

# [1.3.0](https://github.com/stencila/thema/compare/v1.2.0...v1.3.0) (2019-08-30)


### Bug Fixes

* **Demos:** Clean up demos, move script from .html to .ts ([446794e](https://github.com/stencila/thema/commit/446794e))
* **ELife:** Update markup based on microdata discussion ([dd2e11e](https://github.com/stencila/thema/commit/dd2e11e))
* **ELife Theme:** Add theme switcher ([51b5c49](https://github.com/stencila/thema/commit/51b5c49))
* **ELife Theme:** Fix regressions with `converted-article.html` ([ea0ca02](https://github.com/stencila/thema/commit/ea0ca02))
* **ELife Theme:** Render citations in eLife theme by default ([fed4c61](https://github.com/stencila/thema/commit/fed4c61))
* **Nature Theme:** Tweaks to Nature theme markup and styles ([cea4860](https://github.com/stencila/thema/commit/cea4860))
* **PLoS theme:** Tweaks to table, references, and markup ([184ede6](https://github.com/stencila/thema/commit/184ede6))
* **PLoS theme:** Update references style + table markup ([136b4f3](https://github.com/stencila/thema/commit/136b4f3))
* **Reference Styles:** Fix regressions in Nature theme ([2cc7861](https://github.com/stencila/thema/commit/2cc7861))
* **References, eLife:** Add MLA, APA citations to references.html ([806a1f3](https://github.com/stencila/thema/commit/806a1f3))
* **Styles:** Clean up eLife and Nature styles ([903d86a](https://github.com/stencila/thema/commit/903d86a))
* **Themes:** Clean up common styles, eLife, Nature, Plos, Stencila themes ([3ac0897](https://github.com/stencila/thema/commit/3ac0897))
* **Update Demos:** Update HTML encoded example (converted-article.html) ([3c56e0a](https://github.com/stencila/thema/commit/3c56e0a))


### Features

* **Microdata:** Use microdata-based CSS selectors for references. ([a7b690d](https://github.com/stencila/thema/commit/a7b690d))
* **PLoS Theme:** Add PLoS WIP theme ([c4819f9](https://github.com/stencila/thema/commit/c4819f9))

# [1.2.0](https://github.com/stencila/thema/compare/v1.1.0...v1.2.0) (2019-07-24)


### Bug Fixes

* **Build:** Simplify build command and fix output directory structure ([c0793bf](https://github.com/stencila/thema/commit/c0793bf))
* **Stencila Theme:** Refine some spacing and layouts ([97c12b9](https://github.com/stencila/thema/commit/97c12b9))
* **Syntax Highlighting:** Fix syntax highlighting for JSON code blocks ([57cd42a](https://github.com/stencila/thema/commit/57cd42a))


### Features

* **Stencila Theme:** Refactor styles to be mobile first ([bf9336d](https://github.com/stencila/thema/commit/bf9336d))
