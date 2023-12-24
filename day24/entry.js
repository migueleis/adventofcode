const demo = `19, 13, 30 @ -2,  1, -2
18, 19, 22 @ -1, -1, -2
20, 25, 34 @ -2, -2, -4
12, 31, 28 @ -1, -2, -1
20, 19, 15 @  1, -5, -3`;

const entry = `298793064594510, 263093335773079, 376515029011499 @ -14, 59, -89
337669218265618, 218879644691028, 94758507317114 @ -60, -80, 532
226895012232653, 123459105544245, 213502199200302 @ 160, 303, 104
300501970298399, 314329447278049, 467279541164790 @ -32, 34, -91
388143561918162, 279175111435661, 308798092369721 @ -134, 61, 61
310217205692440, 158888488109515, 131903636341367 @ 78, 307, 265
266233805409781, 440523179923425, 421743441792296 @ 51, -263, -222
213923153356007, 229953103066777, 150547540977934 @ 182, 83, 236
357985867459403, 308234699950145, 367353953144422 @ -100, 7, -46
259917339135601, 262751871330105, 458518817923901 @ 87, 17, -389
196416418373289, 465721136899543, 301154770526496 @ 74, -116, 101
226531126192598, 477222227739431, 346509061761549 @ 40, -121, 59
239792808457531, 327388944149685, 2386999558286 @ 127, -113, 536
274606642683628, 237966533697420, 171489940195602 @ 66, 60, 188
308937573628571, 171347172023113, 121622587068364 @ 179, 281, 341
195608890992639, 199419888200921, 274078725032702 @ 74, 161, 130
344037792517118, 276600737986546, 354154373719482 @ -80, 70, 20
290895471114135, 285929752284171, 325134693007352 @ -19, 60, 55
314298879681047, 245105638724817, 243354033407654 @ 11, -30, -107
286820303633178, 327021654847180, 138476507295537 @ 20, -80, 263
294143047788743, 181783732406873, 178129991693966 @ 220, 191, -38
394266720191653, 398188378647495, 385836911173052 @ -157, -145, -106
329200839733968, 195333634902240, 134018463668737 @ 116, -30, 189
367172093410368, 407464667055975, 195632852928727 @ -176, -645, 35
329325636883521, 189392701755929, 157096184446532 @ 47, 113, -50
322965401405323, 278263562849579, 279697002884522 @ -45, 8, 10
377290392915826, 200328151799814, 525071510376029 @ -114, 160, -131
356565204663751, 314120153893849, 254503860451726 @ -111, -101, 12
308328090624911, 231729398318551, 151834221462478 @ 13, 43, 216
518365608787431, 369781815641696, 465590281056136 @ -299, -56, -142
322943159386603, 209643283716795, 140143215246452 @ 47, -10, 199
317814551942527, 57344099090049, 268940943806966 @ -29, 443, -14
199184614313019, 302281742868121, 341382506573450 @ 191, -47, -122
303128702158665, 343782376504698, 233979446806898 @ -29, -24, 148
287258097381601, 338912174275410, 345170113911486 @ -9, -18, 8
342123348885323, 264855689094815, 163791396968750 @ -95, -493, -8
318650990735962, 245557798265202, 207781699194785 @ 6, -60, -23
277262311581216, 162548622359104, 455652078809434 @ 68, 226, -468
227619823921069, 31355328596013, 107348240371124 @ 44, 339, 303
397539938321143, 187801596811561, 361303430750466 @ -135, 173, 39
314174747370693, 207916265844085, 83156482178782 @ -26, 131, 368
225010199931958, 348243190731450, 273676435161602 @ 36, 18, 140
342545497672888, 224885181995100, 326006157631832 @ -82, 76, -206
400093217617429, 521592289723827, 242128079869400 @ -146, -220, 147
222493706797639, 195475431865689, 235658285843534 @ 291, 141, -53
321700706379135, 244399665846109, 181105297246988 @ -47, 83, 199
307033537294921, 118033585752402, 326186686444952 @ -17, 294, -70
310213680617188, 433665887485932, 113937423236981 @ -30, -204, 303
277731901413162, 369273143921621, 382332716398389 @ 28, -131, -141
260251238186635, 5168117634642, 228333493890137 @ 129, 636, 25
203862735363431, 40874920969833, 189709250695598 @ 113, 375, 196
282106895810977, 186689059816551, 207185483583773 @ 51, 171, 109
310565320105726, 222385416593129, 145620641299919 @ 204, -191, 121
324588031907033, 507516426058763, 211092947433882 @ -40, -572, 90
293397897952485, 330861389588209, 388509406349127 @ -17, -7, -45
424469180517097, 346811601060123, 336255334851080 @ -266, -190, -187
354348169588391, 287994935383249, 298418441637806 @ -103, -22, -44
325575194808037, 205214165659155, 168461119201127 @ 131, -133, -295
297143973762113, 302351911048179, 284565043433480 @ -20, 24, 79
360152481875926, 291387692363568, 201220049028596 @ -122, -70, 114
341688438730311, 193352569261433, 260702329145934 @ -79, 158, 14
334001291243668, 426079522865430, 387451025855087 @ -68, -120, -37
246246140242339, 283723141708239, 270468365879534 @ 73, 19, 56
314535293749228, 377273591709849, 297166971807731 @ -50, -15, 113
139479797327611, 220674419107053, 122496061448828 @ 263, 115, 291
253217867492344, 332073159476438, 441172657125400 @ 12, 28, -34
237917424320419, 358976517995187, 195631494404196 @ 171, -246, 119
340388358891464, 330873733167921, 252132246795843 @ -76, -39, 99
441600592902628, 217598697219645, 336536449715852 @ -184, 141, 58
217249712912563, 239138673368025, 428259366318992 @ 67, 113, -67
239200125864045, 419849247694577, 336673551686802 @ 46, -107, 30
310495856431351, 302621039678550, 293940044647231 @ -27, -18, 9
355790771144122, 150139793387652, 293449081069133 @ -124, 280, -221
278469315185155, 365671107194485, 287835007919746 @ 48, -188, -39
288259757376199, 306136048827417, 361333964735606 @ -11, 25, -9
255819450233566, 305622529278432, 299812760878844 @ 36, 16, 54
273138267846071, 167958891077057, 364365690889086 @ 179, 238, -618
202950627363479, 247109570280301, 108730534123362 @ 161, 68, 315
240730267462103, 273733212284485, 288083946976802 @ 65, 50, 55
249589958168483, 284839323725650, 493403271770522 @ 17, 74, -92
343310871562505, 212523754359249, 164123749282152 @ -134, -291, -295
135228986897689, 284064566304717, 308886144986150 @ 166, 59, 68
302201850062152, 253742614159626, 311327704597436 @ 76, -104, -454
261249804646543, 235629014253125, 430392000304542 @ 51, 94, -204
264936702120543, 238485308904137, 332214742760198 @ 10, 115, 49
346240359398791, 189559770770430, 159938351403803 @ -139, 122, -23
351127657856279, 253176979174462, 341700915139680 @ -91, 80, -18
367754778179298, 354629978838006, 315722854961503 @ -110, -36, 47
395360326641331, 393924611966601, 260446259391866 @ -216, -355, -53
342952853179027, 270742259315562, 416980790060807 @ -79, 70, -75
325925128983889, 202807103979501, 153313990575353 @ 39, 21, 79
361203495915171, 376577615097839, 423333415153510 @ -101, -56, -76
341785748036776, 472041323039801, 344391216581803 @ -78, -239, -31
360519108754204, 244515385078830, 209150134200476 @ -142, -18, 22
321412684660935, 224825048320361, 203051783446110 @ -11, 34, 21
268155568039033, 364417626942306, 362750765476544 @ 15, -50, -14
247748634541253, 269599852960499, 127435919771828 @ 100, 14, 283
275587558942839, 238818562597819, 460713059170210 @ 29, 88, -258
562687263974539, 479581388414577, 498138860656838 @ -342, -177, -162
255455034394323, 267433310358647, 324326382635192 @ 35, 68, 25
279805146585873, 313165454772424, 355787980919487 @ -5, 26, 15
73981597097937, 253975159839079, 19651986723890 @ 202, 104, 394
287589506929983, 335834727128169, 405241116098578 @ -5, -27, -91
207468335511073, 398581516150146, 400612579307999 @ 55, -34, 13
301227687457801, 302528758143243, 399160841518814 @ -26, 26, -64
337251392911159, 179442109788881, 195753958781014 @ -63, 199, -46
396908935138973, 333270328225033, 244016075200548 @ -170, -71, 89
252699338839815, 284613301320841, 239290963417774 @ 97, -22, 62
317731475669581, 203429000674995, 143040025582082 @ 207, -73, 100
237864924244058, 381699957717745, 351485409413177 @ 28, -23, 55
280966276369533, 273288417630531, 201961564725008 @ 140, -150, 13
334508772059209, 157949310946275, 159465800826224 @ -68, 212, 239
286629083440783, 113047691287899, 45981560747600 @ 205, 551, 718
290403359230062, 317499866169858, 252992347526475 @ 28, -102, 21
307996406565427, 345147447845748, 473437013227833 @ -39, -6, -111
434593922493187, 336231969546065, 349241101471134 @ -237, -83, -96
387543183968478, 512601043651825, 246630303571257 @ -160, -407, 71
239420566184473, 295704516642100, 170307251158832 @ 231, -164, 154
309382793838108, 31264625241438, 275365119069617 @ 40, 756, -275
315861675469873, 269548831542545, 249467579450992 @ -36, 37, 83
390985616745787, 362859953220612, 228780505299935 @ -167, -144, 101
431303427195253, 370593146733345, 373842542413552 @ -234, -147, -145
309688539964303, 197755158852861, 173041113032382 @ 75, 108, 60
306610886016703, 168010429302945, 214411452158102 @ 168, 294, -347
275586813540475, 220470948890685, 276329083509260 @ 83, 87, -83
227503436524202, 4004962335501, 190543979211009 @ 142, 525, 161
148559665679578, 244628198380245, 237228699624777 @ 114, 117, 173
324721999699893, 135461576565595, 186312311146752 @ -58, 232, 215
337447424333679, 309980962108483, 261829329731712 @ -71, -46, 45
331681044591023, 411714935117090, 396916629924047 @ -67, -50, 13
383938247423550, 293151456507546, 415529533736210 @ -188, -102, -452
337927188625237, 270619040753157, 205296390999329 @ -69, -115, 23
318914026181283, 187785056550921, 180517785249330 @ -10, 165, 119
306714436691301, 275540599453461, 298905310916372 @ -8, -9, -65
273709888193978, 263757981157445, 171987973307602 @ 140, -83, 140
321028004912797, 300337745505867, 384786506165138 @ -49, 15, -76
243188295248647, 200032784048121, 192885794138942 @ 129, 143, 145
273252657291523, 428638633531457, 49947385559214 @ 120, -541, 512
305289871606139, 320452490431809, 273102401290314 @ -16, -57, 33
262135147686774, 232276959803506, 228110848910938 @ 116, 58, 36
323563161058909, 240815019500097, 143309910684834 @ 126, -531, 102
348082715114695, 215874216575577, 305925297942158 @ -91, 116, -58
262531658915103, 430910878386905, 235515910334546 @ 25, -143, 142
356023391793959, 139965895670681, 317701818754254 @ -121, 301, -252
338241572875631, 187612557727925, 240471361100974 @ -71, 167, -24
198911483461873, 363331511482961, 450237329693526 @ 60, 5, -28
290855677254343, 151886715757065, 151453967828678 @ 245, 387, 133
313941369338924, 193210599847097, 102087542138279 @ 14, 145, 373
319303531319671, 202178037935031, 158769087317432 @ 141, -16, -35
510396215439475, 415522949541369, 452421356167070 @ -246, -55, -44
317513435424919, 319492366266933, 369190763148986 @ -47, 6, -23
353237446245925, 262115476739761, 374794791211535 @ -93, 73, -47
157735173982119, 218020762361593, 115962514378190 @ 176, 130, 298
311097074114343, 368845147532339, 293168350720340 @ 5, -340, -179
342078721687522, 96234568105842, 249912107461871 @ -78, 288, 127
279844911904807, 272259220454649, 328161320482958 @ 26, 28, -56
328985346032719, 190761477733845, 141370841165870 @ 43, 102, 144
102251018247508, 151783363508850, 99586846297547 @ 272, 224, 323
365240838820405, 286076944500753, 210867201571529 @ -109, 41, 171
326990760287559, 265814266180897, 210085654955870 @ -43, -29, 76
490895271980327, 552464781185091, 452862080322000 @ -251, -252, -97
159034061775688, 135132445554122, 39626246209343 @ 210, 254, 421
260737496974944, 250149076567525, 222169352807571 @ 92, 37, 83
245237744290045, 292871024329931, 435137744408820 @ 108, -34, -313
360503921872127, 368371905947021, 360502272024506 @ -113, -160, -143
392759636992015, 435940761004527, 312797916520940 @ -131, -89, 86
320364820726473, 146772393004265, 167915130553502 @ 104, 521, -80
315832244002183, 280586669121945, 232095595747982 @ -12, -78, 8
129943619770153, 193175782321890, 285916228473767 @ 175, 166, 93
291029359530703, 320246724801705, 380194868249414 @ -25, 37, 22
285696928941334, 316101230881350, 179959112245399 @ 66, -168, 147
298071143474703, 325511926815025, 450752785049302 @ -20, -10, -145
171333147282919, 380133075305646, 115482235183964 @ 149, -84, 298
350150387863764, 249323704297353, 204378167670864 @ -98, 33, 114
327018867746346, 211260336621266, 206653500055405 @ -16, 50, -81
354873683337480, 146766098255653, 212178259078692 @ -106, 253, 110
311340668112411, 422386233007421, 409620319414358 @ -38, -134, -86
468776365480471, 463593968469809, 387917085490864 @ -243, -187, -57
307537489402663, 261691878979825, 284503839382462 @ -15, 32, -10
229852727894869, 482675769011855, 307286499769287 @ 39, -133, 95
225342199721351, 366562723267449, 430606416824798 @ 49, -21, -47
337626202404287, 194355824317825, 139043515387270 @ -53, 67, 174
393602904004167, 360140568956185, 211927392158862 @ -179, -163, 120
319319934078028, 396715354463620, 318779502519677 @ -36, -230, -83
299800318339543, 249794046873189, 146305757178358 @ 45, -21, 228
335256559464848, 203812145765080, 163561937578102 @ -8, -122, -240
304649535108412, 477000110882439, 320486279619599 @ -36, -149, 67
319949561790634, 463388872215978, 359529097492107 @ -54, -120, 35
323594052956434, 226641584006415, 150773270350508 @ 42, -133, 122
285097748858479, 288110405349813, 303462224431712 @ 33, -29, -65
332621605629829, 218197719366936, 249483428376560 @ -57, 90, -26
328593384796906, 159246690668085, 336487772156246 @ -48, 237, -224
257308837942771, 294683827934097, 115933114344662 @ 114, -77, 310
183439561174777, 386176067181261, 402737719664758 @ 78, -21, 12
330705033560785, 269642365238683, 245719285184202 @ -48, -80, -70
283989302158762, 150239686900956, 375275867607740 @ 6, 226, -78
260768763330781, 382621293778926, 188382738864503 @ 163, -422, 101
91491344500998, 117212448040423, 83438137370326 @ 230, 259, 336
310202259525886, 385191369788143, 356737229744305 @ -36, -89, -21
332528815800922, 198935938285035, 154337232242213 @ 16, -13, -41
289258859421859, 382322969971257, 391519634482514 @ -16, -55, -27
280650102109403, 280210742923730, 300280674144852 @ 25, 14, -10
272019579331783, 234712562922585, 332078046123662 @ 45, 87, -80
395665486685524, 258555940983573, 273790904015623 @ -138, 93, 117
247760599122809, 429559433795955, 33915940629013 @ 71, -213, 431
323133964637415, 236776322901363, 291646450115028 @ -43, 75, -34
328449311157981, 376150411438342, 313978818734592 @ -61, -62, 50
291442600990778, 217538957649120, 225929567869177 @ 50, 90, 29
327504878775993, 220130227764420, 165622147791032 @ 11, -78, 22
434171783966239, 417565911681705, 374820994069886 @ -168, -53, 38
306274627601101, 411395331745398, 279463167767411 @ -9, -272, -17
284573593132204, 425272760406198, 288992934679445 @ -14, -90, 103
365721846171143, 246135163231350, 305824287271277 @ -139, 24, -155
325708968730762, 156984779362029, 287151138806117 @ -48, 229, -25
235880091373503, 196033587795105, 70434753725942 @ 260, 138, 469
370714208537911, 435870461992935, 156142679635184 @ -123, -213, 238
297333111276459, 314314212154662, 228031564840564 @ 121, -426, -178
320491656771209, 279017158704389, 295892341918592 @ -56, 83, 115
553886433075768, 550865134084195, 380735861956227 @ -326, -253, -15
233713560149041, 416390394415495, 368894835362516 @ 39, -73, 22
226705459061136, 254768099315281, 17571937929988 @ 142, 41, 494
95594209991428, 310885386355032, 194701207374968 @ 200, 34, 206
254675224399905, 75136253325885, 393783101156528 @ 136, 447, -377
360379002312532, 138846077145009, 381447462008741 @ -108, 249, -123
338868639380651, 272513307855331, 202888296978478 @ -73, -34, 104
277311006960914, 304194920302194, 281906002153732 @ 76, -114, -90
253743161373363, 1365660955545, 470590021162722 @ 38, 417, -169
355629375187093, 260479807238325, 222584548536752 @ -132, -97, -55
281598586958573, 462343722573326, 128484099761299 @ 35, -350, 281
241711220474338, 432205002667643, 350205412111463 @ 30, -89, 43
239467145750494, 72419740888833, 116399263355681 @ 76, 345, 299
310952737483513, 167710100705035, 248728732114742 @ 72, 260, -332
318767336685313, 239090255121532, 408223060193502 @ -45, 98, -120
321157552564137, 227528845554135, 182652617100782 @ 8, -18, 40
289913216247355, 107088763389747, 474870578884793 @ 17, 319, -359
320225473684053, 392021004464943, 312149418329892 @ -50, -90, 45
340862658132378, 402612148816910, 148870104904072 @ -80, -770, 194
268477427949263, 315399182183717, 331048565806190 @ 35, -26, -32
333258233562793, 314879215118778, 331539385604156 @ -65, -26, -34
288636241357517, 205363390712423, 228684942002265 @ -13, 151, 159
369330902961103, 195202793963781, 316820694658850 @ -125, 158, -37
208470625045207, 112537496430381, 20934416098670 @ 61, 251, 392
340651890684149, 242930650697620, 224803208109771 @ -77, 52, 77
148325831131575, 246969320264137, 58472665973166 @ 256, 68, 402
334139984348809, 185411447236875, 114066270242576 @ -18, 162, 433
250852925358100, 250777414969537, 368237942441387 @ 42, 89, -35
316809636333483, 283718188949075, 291755295014037 @ -47, 55, 81
338565289734247, 147089268577089, 276154155874262 @ -71, 306, -235
324782555592403, 265431758663745, 128770331931602 @ 110, -833, 283
322354309808199, 212018513548825, 153384289686526 @ 197, -263, -102
338684102086345, 465556176198195, 399357999807614 @ -74, -98, 16
246552405405265, 34612525446165, 462524115387464 @ 56, 387, -189
297205670377107, 266690310293667, 276414545332786 @ 19, -6, -46
256223719306477, 210551068314639, 341851766971454 @ 16, 148, 48
266530070086567, 223423785702321, 283071459954062 @ 77, 95, -40
277835915095282, 335814328384542, 284005413073494 @ 24, -66, 32
309442610820118, 337226396932140, 393591659377487 @ -44, 20, 9
406443206002069, 408418643042667, 474821354202344 @ -141, -45, -62
334538805750414, 205042609862092, 172602418124966 @ -38, 26, -32
281503094887483, 339159593311865, 256093380450069 @ -15, 17, 149
356812301707315, 294715961914937, 228379411406886 @ -117, -95, 36
309832899133447, 148054362784093, 212206611562426 @ 69, 350, -121
328989587514251, 152173295725598, 511434957826493 @ -47, 260, -719
407444273672218, 331675428624832, 301900789437906 @ -180, -52, 12
446991592871323, 319675968256140, 368774633709377 @ -207, 10, -15
302815715050307, 244055350779354, 199934872245465 @ 41, -12, 57
323385582127342, 164704105413230, 248578411939509 @ 48, 322, -621
415646086242361, 560715191566902, 415240017335336 @ -153, -210, -14
207076710569579, 373546775466933, 247401495418410 @ 74, -36, 147
388502901169803, 343409439829645, 309100255124902 @ -172, -140, -78
196383236636473, 156222713558910, 195443983541567 @ 199, 230, 153
147446170109977, 123993486663467, 61824046101387 @ 111, 235, 345
282383469949519, 385425493495227, 359997062555114 @ -7, -62, 6
469683092214347, 421940822129308, 255474485472734 @ -223, -94, 136
224148589893351, 399608231150393, 281374321124654 @ 82, -116, 73
236412793626653, 354176871959573, 59597896611110 @ 50, -29, 364
105643217804789, 135789245921267, 123972693084845 @ 343, 263, 289
440708930150677, 438509363093706, 494882582815667 @ -173, -70, -75
319403776583285, 246462205397832, 249235564379777 @ -37, 60, 55
475919153543399, 413912792152985, 525262593792654 @ -229, -83, -168
310279130029147, 223535166887512, 240772531795423 @ 9, 64, -39
312680333198680, 240440353215963, 61747679859341 @ 58, -101, 611
333899116530181, 165965837184415, 216839249235837 @ -33, 307, -355
246497966641390, 215242989543399, 339925896131492 @ 62, 131, -30
357489301242709, 239904508379958, 324605157824168 @ -109, 70, -94
326416001998007, 357574677452074, 321748348690294 @ -59, -32, 48
309512346739294, 264121176973362, 322681929802208 @ -46, 100, 94
308564758667143, 119573889501375, 268184347348292 @ 149, 640, -721
161268831731758, 405426087156930, 350492312074487 @ 124, -70, 33
306714387967308, 324405253198678, 324146836256021 @ -40, 28, 73
309060021698489, 256059359660425, 129012368412302 @ -41, 97, 280
335384329650339, 186871073057303, 147134214615107 @ -7, 131, -5
224607270861142, 245574954550869, 456188850636725 @ 52, 109, -81
210004625118791, 267836948065689, 245626536468366 @ 143, 36, 84
361872595319165, 272986116301832, 150794679356525 @ -133, -56, 223
348137722326439, 292125801716457, 340220272559454 @ -111, -285, -622
338769913902940, 199679449431663, 148426401884921 @ -62, -41, 11
343514348390387, 191966371332872, 168977571537884 @ -103, 118, -14
223768714241743, 343362851944590, 495187716912249 @ 45, 12, -99
283805532023104, 447351645524103, 388627863218216 @ -16, -101, 6`;
module.exports = { demo, entry };
