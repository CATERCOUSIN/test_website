'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a771335bfabc1e82ebecd4ddf3caf50e",
"assets/AssetManifest.bin.json": "9cb049624a16be01f017b003b1b7da98",
"assets/AssetManifest.json": "d9c80017138dbebafb5fa07cc77c0c07",
"assets/assets/icons/documents/all_documents.png": "a15f49b7ba8bfd8c6e3359bf2dd7c30d",
"assets/assets/icons/documents/customize_view.png": "b64b23ca2c1c0497a229926cc6d5dd52",
"assets/assets/icons/documents/doc_details/activity_history.png": "7688bc651f29d8c8dc37cc8fffcfac02",
"assets/assets/icons/documents/doc_details/add.png": "5622ffa60cda386a885070fe256e83b3",
"assets/assets/icons/documents/doc_details/attachments.png": "344888f7ad676357036020e1dbec79bc",
"assets/assets/icons/documents/doc_details/cloud_upload.png": "42580d45c5afb9494bee815002c00289",
"assets/assets/icons/documents/doc_details/csv_file.png": "b47d7b767310ed6884c4f3dd616835de",
"assets/assets/icons/documents/doc_details/delete.png": "e23d374a06d8bafdc8339a134d2d49bc",
"assets/assets/icons/documents/doc_details/delete_close.png": "22a45bff08a2cae4fcf90b01215023ea",
"assets/assets/icons/documents/doc_details/document.png": "196507459f1f4a834edca38f89667fd3",
"assets/assets/icons/documents/doc_details/download.png": "cd1174fbf933cc751ed1c3f3908b9b60",
"assets/assets/icons/documents/doc_details/download_editable.png": "094d147216df78620fd603b69c556fcf",
"assets/assets/icons/documents/doc_details/information.png": "81de7552e914912180753e8897b2282c",
"assets/assets/icons/documents/doc_details/links.png": "ba47169daa3eb509e8020ccc2bd77888",
"assets/assets/icons/documents/doc_details/pdf_file.png": "076e605127d02e7171997ab089c7b2d2",
"assets/assets/icons/documents/doc_details/revision.png": "31335a126acfc31aa08ee4a6458bad8c",
"assets/assets/icons/documents/doc_details/revision_history.png": "4e3322c1948974b2abb3fe8e4f1d8866",
"assets/assets/icons/documents/doc_details/show_markup.png": "e3159251c7d518ac9cc2c431ad581d62",
"assets/assets/icons/documents/doc_details/sidebar.png": "7e99a88e1dea2622b9ed862626ae6afc",
"assets/assets/icons/documents/doc_details/view.png": "be8b46354bde7186755c1c950f5a54fd",
"assets/assets/icons/documents/doc_details/zoom_in.png": "e8adedbc6f5ff877be5d75a6fa6a9366",
"assets/assets/icons/documents/doc_details/zoom_out.png": "b4a781624e363e5738e67f9319aee9b2",
"assets/assets/icons/documents/draft.png": "430a193813ec13911ca77db9bf95b6e6",
"assets/assets/icons/documents/favorites.png": "383a253f041a61459a11f6143882a1bc",
"assets/assets/icons/documents/folder.png": "fc9be52d4a6216fe0468c9d312d2bb48",
"assets/assets/icons/documents/in_approval.png": "c9f4411036f57b7cdbf5dba461e816f6",
"assets/assets/icons/documents/in_review.png": "e4a219bcaf65c9636411210e62bd147e",
"assets/assets/icons/documents/obsolete.png": "8cc984bee701bd2b00bb811732e27f92",
"assets/assets/icons/documents/released.png": "da23c657ed8e6d1086f9634bb845ab7e",
"assets/assets/icons/expand_arrow.png": "4e464d1f9e45be4ec4918054bdce534d",
"assets/assets/icons/fluent_attach.png": "890dbfdcbc976f13a3cf97b03aecf82c",
"assets/assets/icons/iconamoon_send-light.png": "1618014d563d2168123763e559421385",
"assets/assets/icons/iris_logo.png": "30e53a6b6356c868838126a35cd2cc40",
"assets/assets/icons/Iris_Menu_Vector.png": "043d900afde3787454d1d31cd0ef5f6f",
"assets/assets/icons/iris_vector.png": "8c8a58b126d8ea87a1ff753e7cb5e231",
"assets/assets/icons/training/all_documents.png": "d836f971bc413e3de491ec4af1004afc",
"assets/assets/icons/training/all_groups.png": "13595e616e21fdc0a6400ee0e3042396",
"assets/assets/icons/training/all_records.png": "b943ab368d63fcaf05ec53302bec67ee",
"assets/assets/icons/training/all_training_plans.png": "66f628fa7d60b113ea051964e69b44e6",
"assets/assets/icons/training/all_users.png": "9878449557b81016191c5df551d6c2e2",
"assets/assets/icons/training/completed.png": "27b9042e95be62554540235af97cf657",
"assets/assets/icons/training/due.png": "62a4686698ed02493b078c8c0ead9ad4",
"assets/assets/icons/training/pastdue.png": "a4828ebc5fdab5703b1e0208d7468f19",
"assets/assets/images/certificate_ABC.png": "bc3d3f5e65eb8a9b1ec53ab4c34665cc",
"assets/assets/images/docs-logo.png": "e651a43247b643ec0d2133665ebbf34e",
"assets/assets/images/g-logo-2.png": "ff629c02385f2f3a199b7e0b3065d077",
"assets/assets/json/chat_history.json": "d95b5f341f3394d1585644cfae0cd79b",
"assets/assets/json/dashboard_calender_event.json": "0ed29eee05bc7cb2d42c9539138dfd54",
"assets/assets/json/dashboard_my_recent_activity.json": "97e21bbf115fab56e239663defbcf7b6",
"assets/assets/json/dashboard_my_tasks.json": "1064f99be3311e6db8d63544d876214d",
"assets/assets/json/dashboard_my_training.json": "cc60e82777ba1630057490e70ad7e70c",
"assets/assets/json/dashboard_task.json": "55af4e5864fe9b86f6165c98d2b54c3e",
"assets/assets/json/dashboard_training.json": "0711354ef62f140620c8414893a4ad6f",
"assets/assets/json/documents.json": "8deb6781c7cec77cfccf12996f95ddb6",
"assets/assets/json/document_activity_history.json": "9ded267b94a24f7034b4c8a9833662a0",
"assets/assets/json/document_links.json": "3a8bb627abd824a845e7ded13f0c2a90",
"assets/assets/json/document_revision_history.json": "e75a838699c1ba2f0f22a65a5b93195b",
"assets/assets/json/iris.json": "2f5a1e296128875244abe9a1644f2fbd",
"assets/assets/json/search.json": "b2ac970248038fd9f91888105bdf6404",
"assets/assets/screen_shots/acc_page_150.PNG": "7a96608f99abf0d1f9f709f370c3ba46",
"assets/assets/screen_shots/acc_page_151.PNG": "81ec7ce71307fabf738ab1cadc581493",
"assets/assets/screen_shots/acc_page_152.PNG": "a0934a7edf96ec1ec614d6b59e6b83f1",
"assets/assets/screen_shots/acc_page_153.PNG": "c552c788ad48d49bf54bfa070296bc49",
"assets/assets/screen_shots/advanced_search_doc.png": "9bb971280866a42f7d6108ac8c3b13eb",
"assets/assets/screen_shots/advance_search.png": "16ea6f213b3ff80168b7c499aca7d715",
"assets/assets/screen_shots/changes_document.png": "0c3fd8c704d585ded466e651f4c4a91d",
"assets/assets/screen_shots/changes_impact_assesment.png": "03e85fea66a60b1670dc95d94a1de559",
"assets/assets/screen_shots/changes_impact_assessment.png": "04daf18f58e1c8a2b9ec1a91ad966e05",
"assets/assets/screen_shots/changes_impact_assessment1.png": "808a84b6b7925ad9f30a8cf5e09df482",
"assets/assets/screen_shots/changes_impact_assessment2.png": "9d89f45b38a85666e95a44b87d703590",
"assets/assets/screen_shots/changes_impact_assessment3.png": "0b16bc26e51f65d6ef1e74d1f1514908",
"assets/assets/screen_shots/changes_implementation.png": "6d649d21d9b7c461d69a89b48fde8bf1",
"assets/assets/screen_shots/changes_implementation1.png": "3c29eb580dc00671ab67d04525e4cad5",
"assets/assets/screen_shots/changes_information.png": "691efe61466d5d637d1167f1036a0d91",
"assets/assets/screen_shots/changes_links.png": "3514f6c4655e7e96218c83c58c734064",
"assets/assets/screen_shots/changes_routing.png": "f67156e5ad705d0bb3707de2bda8a62a",
"assets/assets/screen_shots/changes_routing1.png": "70360e64cc49ea20d423552b7a2c8ce5",
"assets/assets/screen_shots/changes_routing2.png": "ac79ff9672112528552608fdfee17f3e",
"assets/assets/screen_shots/changes_routing3.png": "90f191998abd29d8e178b1c43b9203dd",
"assets/assets/screen_shots/documents_35.png": "aac8acf8dca53467e5591110f7de3473",
"assets/assets/screen_shots/documents_36.png": "57d56e6dbeff9a0bdf2cc477a62d576f",
"assets/assets/screen_shots/documents_37.png": "9a869c6ff27baa452160bb775e8c4516",
"assets/assets/screen_shots/documents_38.png": "3e4e845767a008d5a644d9c808d98243",
"assets/assets/screen_shots/documents_39.png": "edddfdd499014e1009cb1c12c8c686e4",
"assets/assets/screen_shots/documents_40.png": "40e8976333a57727ee640716361797b8",
"assets/assets/screen_shots/documents_41.png": "40e8976333a57727ee640716361797b8",
"assets/assets/screen_shots/documents_42.png": "40e8976333a57727ee640716361797b8",
"assets/assets/screen_shots/documents_43.png": "40e8976333a57727ee640716361797b8",
"assets/assets/screen_shots/documents_44.png": "40e8976333a57727ee640716361797b8",
"assets/assets/screen_shots/documents_45.png": "40e8976333a57727ee640716361797b8",
"assets/assets/screen_shots/documents_46.png": "40e8976333a57727ee640716361797b8",
"assets/assets/screen_shots/documents_47.png": "40e8976333a57727ee640716361797b8",
"assets/assets/screen_shots/documents_48.png": "40e8976333a57727ee640716361797b8",
"assets/assets/screen_shots/documents_49.png": "40e8976333a57727ee640716361797b8",
"assets/assets/screen_shots/documents_50.png": "801c19a8b83021747f338ecce5182815",
"assets/assets/screen_shots/documents_51.png": "77c9c86263ffaef960dedf998dc85cd5",
"assets/assets/screen_shots/documents_52.png": "cfeba8c9cae3b96631f0aaba3b66bc10",
"assets/assets/screen_shots/documents_53.png": "b27deb94b5f3bbb64b529035743ba28f",
"assets/assets/screen_shots/documents_54.png": "1d78cacdded9245d683df4557b9471f2",
"assets/assets/screen_shots/documents_55.png": "40e8976333a57727ee640716361797b8",
"assets/assets/screen_shots/documents_56.png": "40e8976333a57727ee640716361797b8",
"assets/assets/screen_shots/documents_57.png": "cf3bff884a1eee0bc649b7485311ea87",
"assets/assets/screen_shots/documents_58.png": "56fc220b543b32bdd4e71be65e013f5f",
"assets/assets/screen_shots/documents_cust_view.png": "cbe41a77a13c946d2264cbfc847c7cbf",
"assets/assets/screen_shots/documents_main.png": "6e8dbb6a2a644a65a89c51c8dc104db2",
"assets/assets/screen_shots/feedback_page_156.PNG": "36b1ade85cdc1c74bce9db0fec27acce",
"assets/assets/screen_shots/notification_page_155.PNG": "0c039b002f94810eabaf745acf04e086",
"assets/assets/screen_shots/p14.png": "5f66e726efe42daade232ff8309db2ed",
"assets/assets/screen_shots/p15.png": "b606aa76aa3ce00c4d8a6f898856b8e5",
"assets/assets/screen_shots/p16.png": "ab56c5fcae3ddb587d37da6ff0f2a784",
"assets/assets/screen_shots/p17.png": "230d4b6bc7595e4982ceb927bf4878e2",
"assets/assets/screen_shots/p18.png": "26d21c89d2594973c0d43a1cb879be3c",
"assets/assets/screen_shots/p19.png": "6b21bbbdc3fcc2347a53b1ba75a3ef3f",
"assets/assets/screen_shots/p20.png": "62c073313859105d43f8ccb3ed3a43f7",
"assets/assets/screen_shots/p21.png": "8197dc33a9298f62316941e986fe820a",
"assets/assets/screen_shots/p22.png": "3ee4cc6f320f9ceeeaf72d23be5140b8",
"assets/assets/screen_shots/p23.png": "470508e260c1648d383b21eff1d32389",
"assets/assets/screen_shots/p24.png": "b4c527b58ba4dfd5c03192327893b429",
"assets/assets/screen_shots/p25.png": "461a8bb54552813fae488294cc49f71e",
"assets/assets/screen_shots/p26.png": "4d8548d08d15127e46ac79e95747d04d",
"assets/assets/screen_shots/p27.png": "fe55f6f2caceca6f014a734a03797cb2",
"assets/assets/screen_shots/p28.png": "796c6a5a8c0049a55948a69f68eadccd",
"assets/assets/screen_shots/p29.png": "befe0021e3dedde06dd9fe105e647931",
"assets/assets/screen_shots/p30.png": "4837a1597aa6e8511396ce5d77623af8",
"assets/assets/screen_shots/p31.png": "2e0695a04a92721ff2b9522734ef9446",
"assets/assets/screen_shots/p61.png": "6dbd656eb830f2dd2f7471eea2564d99",
"assets/assets/screen_shots/p62.png": "2514a2a4788daf48aa86a4463a557718",
"assets/assets/screen_shots/p63.png": "79cb7e624f1d6d579ccec6254bedc902",
"assets/assets/screen_shots/p64.png": "658ebe1886904bd2c7e9c8930ed5c4fa",
"assets/assets/screen_shots/p67.png": "1462b19beac2c04f79125f33de2c1b90",
"assets/assets/screen_shots/p68.png": "28dde2936e0f5f14da11da43469c8df5",
"assets/assets/screen_shots/p69.png": "cab5c26e35b7ce3698d510e57c064033",
"assets/assets/screen_shots/p72.png": "4ee3178b75e43f3af01fe4fbb92f64e9",
"assets/assets/screen_shots/p73.png": "a7ec86f837f7be14feb5c7f0d68c5b71",
"assets/assets/screen_shots/p74.png": "5d610cb355091cdbfd586a7308fbf47b",
"assets/assets/screen_shots/p75.png": "833799643a896c7abbbd35dec67dc544",
"assets/assets/screen_shots/p76.png": "0757533f8a2e266bf0c50428f5227b92",
"assets/assets/screen_shots/planbilling_page_154.PNG": "2872638d2977e920bcacaef7649232f9",
"assets/assets/screen_shots/r1.png": "501f901fc566b0a21e6ee41fa6b76efc",
"assets/assets/screen_shots/r2.png": "f6b91bfbe28d5802c7b002a86a1af656",
"assets/assets/screen_shots/r3.png": "b570fbbdcead9e8022a510abf5b15603",
"assets/assets/screen_shots/r4.png": "20820f6f87f37d323001bd6a7342a08e",
"assets/assets/screen_shots/r5.png": "33540ba0f5ab082b3dcd48ecf9741a25",
"assets/assets/screen_shots/sb_page_116.PNG": "44a3c34531973b09985a0f36c336089f",
"assets/assets/screen_shots/sb_page_117.PNG": "fd3e38a9761ede8132a61279533d0cde",
"assets/assets/screen_shots/sb_page_118.PNG": "0fb702582fed71f3db4c5f2f2f310442",
"assets/assets/screen_shots/sb_page_119.PNG": "fd5fbcfd72427fe55023ac17d656027b",
"assets/assets/screen_shots/sb_page_120.PNG": "05237fb799905f484a3a28f117124545",
"assets/assets/screen_shots/sb_page_121.PNG": "098a2ecff4942d95d21fa867beb4941c",
"assets/assets/screen_shots/sb_page_122.PNG": "bfe29844edf39d420880645591ec6430",
"assets/assets/screen_shots/sb_page_123.PNG": "663a2c975393fca302234f1ae24b8e39",
"assets/assets/screen_shots/sb_page_124.PNG": "da4669d16a1511980a197b9fd2b35649",
"assets/assets/screen_shots/sb_page_125.PNG": "f87215c7c889e1269eab43f4300365f3",
"assets/assets/screen_shots/sb_page_126.PNG": "4638fd71955cdec606c63715ca5d46c4",
"assets/assets/screen_shots/sb_page_127.PNG": "45781a8cf0fb42f440ef742d1464bff3",
"assets/assets/screen_shots/sb_page_128.PNG": "b251567ca0b4468734d6057fd31ab870",
"assets/assets/screen_shots/sb_page_129.PNG": "f5beae4f712b98dcf0f5df4522243397",
"assets/assets/screen_shots/sb_page_130.PNG": "285c5e05ec21e3dd4d8a62755c2016c3",
"assets/assets/screen_shots/sb_page_131.PNG": "b885984f1d03e6a8670266817ce66ead",
"assets/assets/screen_shots/sb_page_132.PNG": "563963e917911b3fcb7da1ed08fc0efb",
"assets/assets/screen_shots/sb_page_133.PNG": "dd63bd256c1e677899bc48cdc6dc7536",
"assets/assets/screen_shots/sb_page_134.PNG": "b4d51d20dcc6822f17d88037b065f7dc",
"assets/assets/screen_shots/sb_page_135.PNG": "1114b297f9bad4862fe4999a71b6042a",
"assets/assets/screen_shots/search01.png": "25e57a26195b7218c7817f21b01d2629",
"assets/assets/screen_shots/task.png": "8178853bae6c69164493281cb03888c7",
"assets/assets/screen_shots/training.png": "db060c2b8bae1961bdf4d4557b8541d9",
"assets/assets/screen_shots/training1.png": "00f2490af76163f900b86256f8dca9b7",
"assets/assets/screen_shots/training11.png": "2440bae5c38bc43deba314bfb8b3a7ad",
"assets/assets/screen_shots/training12.png": "7c88a7ae12ef4f0ec05ade88590df467",
"assets/assets/screen_shots/training13.png": "f8d42e17f0ef5f5a8f7eaf911c2951cc",
"assets/assets/screen_shots/training14.png": "3c50f32bbf1b0b8bdc4f570364a7e4a5",
"assets/assets/screen_shots/training15.png": "781ef43c1d304aaa5126d510f0f49bd2",
"assets/assets/screen_shots/training16.png": "22d4ec3e891a1374c7072a8ded499ec6",
"assets/assets/screen_shots/training17.png": "cb42911d8e4f422c2cbb0b0bdb536105",
"assets/assets/screen_shots/training18.png": "f1d5d6b0716553cd716a1b74f46afce7",
"assets/assets/screen_shots/training19.png": "d556b69b3d229cf2c1982c6c3b60743c",
"assets/assets/screen_shots/training2.png": "95e242ec5b9abe3c504647e1e63b27a4",
"assets/assets/screen_shots/training20.png": "b165db6a8d900dc732c2ba1d5fa1de1c",
"assets/assets/screen_shots/training21.png": "d8bd8d863f6663fe7a18e85ca02db489",
"assets/assets/screen_shots/training22.png": "eff293efb2cc0c66e9e69ff9f4cd9eb9",
"assets/assets/screen_shots/training23.png": "072abb5f629efeb3468c94c79054612f",
"assets/assets/screen_shots/training24.png": "81a1fbbfa20b5add4c8670034e0dc271",
"assets/assets/screen_shots/training3.png": "e7aa0bc347898bee3667bfaa9b82053a",
"assets/assets/screen_shots/training4.png": "b32e07a942cf5afb8bfb95d392a791da",
"assets/assets/screen_shots/training5.png": "46ad1029d31187aa080b064530150eef",
"assets/assets/screen_shots/training6.png": "f75b20511731dbe2d62c8022abd919cc",
"assets/assets/screen_shots/training7.png": "a8b3dc35b72275c09806850a5e3218ac",
"assets/assets/screen_shots/training8.png": "96e542646531396e832be266c4410352",
"assets/assets/screen_shots/training9.png": "6f2b0e2e50ae293e3ed7a4e257400107",
"assets/assets/screen_shots/traininh10.png": "b96c06e51ccb42add934140ce7f7b3f5",
"assets/assets/theme/syneris-bg.jpg": "b51ae9015f2faad113b65452009dc2f0",
"assets/FontManifest.json": "866b9b20ab0e8c30ffe220d2a2d66abe",
"assets/fonts/MaterialIcons-Regular.otf": "6144281a6924ee6863a63b9462e5de4c",
"assets/NOTICES": "3f896009bd9ba34aac971119b84d545c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-arrow.png": "8efbd753127a917b4dc02bf856d32a47",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-arrow.png": "3ea423a6ae14f8f6cf1e4c39618d3e4b",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/packages/flutter_chat_ui/assets/icon-arrow.png": "678ebcc99d8f105210139b30755944d6",
"assets/packages/flutter_chat_ui/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"assets/packages/flutter_chat_ui/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"assets/packages/flutter_chat_ui/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"assets/packages/flutter_chat_ui/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"assets/packages/flutter_chat_ui/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"assets/packages/flutter_chat_ui/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "dddc5c70148f56609c3fb6b29929388e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/packages/quill_native_bridge_linux/assets/xclip": "d37b0dbbc8341839cde83d351f96279e",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "eb84155d9ab8375561611abc433f6342",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6c1d9fdb239ecadf43dc482f5c7d64ec",
"/": "6c1d9fdb239ecadf43dc482f5c7d64ec",
"main.dart.js": "7ca030f49117eb53f8c7e1a5a1cb31f1",
"manifest.json": "e15acd9261af7c846a4ca1ad0882e534",
"version.json": "ad1467ce977117c68c70ccb6ddb782ff"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
