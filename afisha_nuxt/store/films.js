export const state = () => ({
    films: [
        {
            name: 'Зеркала: Инкарнация',
            info: 'После смерти матери две несовершеннолетние сестры Оливия и Клэр прибывают в дом родной тёти Бет, которая не очень-то рада гостям. 40 лет назад в этом доме нечто убило младшую сестру Бет, и теперь женщина строго-настрого запрещает девочкам спускаться в подвал. Но ночью голос зовёт младшую Клэр: указывает ей, где найти ключ от подвала, велит подойти к зеркалу и произнести заклинание, чтобы тёмная сущность могла пробраться в этот мир.',
            afisha_picture: '/media/images/image_49.jpg',
            age_allowed: 18,
            duration: 86,
            mark_kp: 4.3,
            cinemas: [
                {
                    name: 'Эпицентр',
                    address: 'г. Калининград, ул. Проф. Баранова 30, 4 этаж',
                    phones: [
                        '+7-(4012)-300-028',
                        '+7-(4012)-300-003'
                    ],
                    cinema_icon: '/media/images/epicentr_label.jpg',
                    sessions: []
                },
                {
                    name: 'Синема Парк Европа',
                    address: 'г. Калининград, ул. Профессора Баранова, 40, ТРЦ «Европа», 3-й этаж',
                    phones: [
                        '8-800-700-01-11'
                    ],
                    cinema_icon: '/media/images/cinema_park_label.jpg',
                    sessions: []
                },
                {
                    name: 'Киносфера',
                    address: 'г.Калининград, ул.Челнокова, 11',
                    phones: [
                        '+7-(4012)-320-222',
                        '+7-(4012)-313-006',
                        '+7-(4012)-313-007'
                    ],
                    cinema_icon: '/media/images/Kinosphera_label.jpg',
                    sessions: []
                },
                {
                    name: 'КАРО 7 Плаза',
                    address: 'г. Калининград, Ленинский пр-т, д. 30. ТРЦ "Калининград Плаза"',
                    phones: [
                        '+7-(903)-626-00-85'
                    ],
                    cinema_icon: '/media/images/Karo_lable.png',
                    sessions: [
                        {
                            time: '23:45',
                            external_id: '169520710',
                            price: '140.00',
                            session_format: '2D'
                        }
                    ]
                }
            ]
        },
        {
            name: 'Довод',
            info: 'После теракта в киевском оперном театре агент ЦРУ объединяется с британской разведкой, чтобы противостоять русскому олигарху, который сколотил состояние на торговле оружием. Для этого агенты используют инверсию времени, заставляющую уже произошедшие события идти вспять.',
            afisha_picture: '/media/images/image_33.jpg',
            age_allowed: 16,
            duration: 150,
            mark_kp: 8.0,
            cinemas: [
                {
                    name: 'Эпицентр',
                    address: 'г. Калининград, ул. Проф. Баранова 30, 4 этаж',
                    phones: [
                        '+7-(4012)-300-028',
                        '+7-(4012)-300-003'
                    ],
                    cinema_icon: '/media/images/epicentr_label.jpg',
                    sessions: [
                        {
                            time: '21:00',
                            external_id: '54804290',
                            price: '290.00',
                            session_format: '2D'
                        },
                        {
                            time: '22:45',
                            external_id: '54804271',
                            price: '290.00',
                            session_format: '2D'
                        }
                    ]
                },
                {
                    name: 'Синема Парк Европа',
                    address: 'г. Калининград, ул. Профессора Баранова, 40, ТРЦ «Европа», 3-й этаж',
                    phones: [
                        '8-800-700-01-11'
                    ],
                    cinema_icon: '/media/images/cinema_park_label.jpg',
                    sessions: [
                        {
                            time: '20:25',
                            external_id: '54849086',
                            price: '460.00',
                            session_format: 'IMAX 2D'
                        },
                        {
                            time: '21:25',
                            external_id: '54849147',
                            price: '310.00',
                            session_format: '2D'
                        },
                        {
                            time: '21:55',
                            external_id: '54896662',
                            price: '430.00',
                            session_format: '4DX'
                        },
                        {
                            time: '22:45',
                            external_id: '54849099',
                            price: '310.00',
                            session_format: '2D'
                        },
                        {
                            time: '23:30',
                            external_id: '54849088',
                            price: '460.00',
                            session_format: 'IMAX 2D'
                        }
                    ]
                },
                {
                    name: 'Киносфера',
                    address: 'г.Калининград, ул.Челнокова, 11',
                    phones: [
                        '+7-(4012)-320-222',
                        '+7-(4012)-313-006',
                        '+7-(4012)-313-007'
                    ],
                    cinema_icon: '/media/images/Kinosphera_label.jpg',
                    sessions: [
                        {
                            time: '20:10',
                            external_id: '54807389',
                            price: '260.00',
                            session_format: '2D'
                        },
                        {
                            time: '21:15',
                            external_id: '54807384',
                            price: '260.00',
                            session_format: '2D'
                        }
                    ]
                },
                {
                    name: 'КАРО 7 Плаза',
                    address: 'г. Калининград, Ленинский пр-т, д. 30. ТРЦ "Калининград Плаза"',
                    phones: [
                        '+7-(903)-626-00-85'
                    ],
                    cinema_icon: '/media/images/Karo_lable.png',
                    sessions: [
                        {
                            time: '20:25',
                            external_id: '169520709',
                            price: '280.00',
                            session_format: '2D'
                        },
                        {
                            time: '21:20',
                            external_id: '169520799',
                            price: '280.00',
                            session_format: '2D'
                        },
                        {
                            time: '22:05',
                            external_id: '169520741',
                            price: '280.00',
                            session_format: '2D'
                        },
                        {
                            time: '23:00',
                            external_id: '169520768',
                            price: '280.00',
                            session_format: '2D'
                        }
                    ]
                }
            ]
        },
        {
            name: 'Гренландия',
            info: 'Огромная комета мчится к Земле и угрожает уничтожить планету. Конец света кажется неизбежным. Единственное безопасное место – бункер в далекой Гренландии. Джон с семьёй отправляется в опасное путешествие, которое осложняется не только разрушительными последствиями приближения кометы, но и паникой обезумевших людей.',
            afisha_picture: '/media/images/image_35.jpg',
            age_allowed: 16,
            duration: 119,
            mark_kp: 6.6,
            cinemas: [
                {
                    name: 'Эпицентр',
                    address: 'г. Калининград, ул. Проф. Баранова 30, 4 этаж',
                    phones: [
                        '+7-(4012)-300-028',
                        '+7-(4012)-300-003'
                    ],
                    cinema_icon: '/media/images/epicentr_label.jpg',
                    sessions: [
                        {
                            time: '23:40',
                            external_id: '54804284',
                            price: '290.00',
                            session_format: '2D'
                        }
                    ]
                },
                {
                    name: 'Синема Парк Европа',
                    address: 'г. Калининград, ул. Профессора Баранова, 40, ТРЦ «Европа», 3-й этаж',
                    phones: [
                        '8-800-700-01-11'
                    ],
                    cinema_icon: '/media/images/cinema_park_label.jpg',
                    sessions: []
                },
                {
                    name: 'Киносфера',
                    address: 'г.Калининград, ул.Челнокова, 11',
                    phones: [
                        '+7-(4012)-320-222',
                        '+7-(4012)-313-006',
                        '+7-(4012)-313-007'
                    ],
                    cinema_icon: '/media/images/Kinosphera_label.jpg',
                    sessions: [
                        {
                            time: '21:50',
                            external_id: '54807401',
                            price: '260.00',
                            session_format: '2D'
                        }
                    ]
                },
                {
                    name: 'КАРО 7 Плаза',
                    address: 'г. Калининград, Ленинский пр-т, д. 30. ТРЦ "Калининград Плаза"',
                    phones: [
                        '+7-(903)-626-00-85'
                    ],
                    cinema_icon: '/media/images/Karo_lable.png',
                    sessions: [
                        {
                            time: '21:45',
                            external_id: '169520681',
                            price: '280.00',
                            session_format: '2D'
                        }
                    ]
                }
            ]
        },
        {
            name: 'Новые мутанты',
            info: 'Пятерых юных мутантов против их воли держат на секретном объекте. Здесь они обнаруживают у себя суперспособности и начинают сражаться, чтобы вырваться из заключения.',
            afisha_picture: '/media/images/image_36.jpg',
            age_allowed: 16,
            duration: 94,
            mark_kp: 5.5,
            cinemas: [
                {
                    name: 'Эпицентр',
                    address: 'г. Калининград, ул. Проф. Баранова 30, 4 этаж',
                    phones: [
                        '+7-(4012)-300-028',
                        '+7-(4012)-300-003'
                    ],
                    cinema_icon: '/media/images/epicentr_label.jpg',
                    sessions: [
                        {
                            time: '21:30',
                            external_id: '54804276',
                            price: '290.00',
                            session_format: '2D'
                        }
                    ]
                },
                {
                    name: 'Синема Парк Европа',
                    address: 'г. Калининград, ул. Профессора Баранова, 40, ТРЦ «Европа», 3-й этаж',
                    phones: [
                        '8-800-700-01-11'
                    ],
                    cinema_icon: '/media/images/cinema_park_label.jpg',
                    sessions: [
                        {
                            time: '22:00',
                            external_id: '54849140',
                            price: '300.00',
                            session_format: '2D'
                        }
                    ]
                },
                {
                    name: 'Киносфера',
                    address: 'г.Калининград, ул.Челнокова, 11',
                    phones: [
                        '+7-(4012)-320-222',
                        '+7-(4012)-313-006',
                        '+7-(4012)-313-007'
                    ],
                    cinema_icon: '/media/images/Kinosphera_label.jpg',
                    sessions: [
                        {
                            time: '23:15',
                            external_id: '54807390',
                            price: '260.00',
                            session_format: '2D'
                        }
                    ]
                },
                {
                    name: 'КАРО 7 Плаза',
                    address: 'г. Калининград, Ленинский пр-т, д. 30. ТРЦ "Калининград Плаза"',
                    phones: [
                        '+7-(903)-626-00-85'
                    ],
                    cinema_icon: '/media/images/Karo_lable.png',
                    sessions: []
                }
            ]
        },
        {
            name: 'Вратарь Галактики',
            info: '2071 год. Галактические войны разрушили Луну и изменили климат на Земле. Москва – в тропических лесах, а Нью-Йорк покрылся льдом. Над Москвой возвышается огромный инопланетный корабль – это стадион, на котором проходят зрелищные межгалактические соревнования по космоболу — игре, объединившей в себе спорт и гладиаторские бои. За матчами следит вся галактика. Играть в космобол могут только атлеты. Именно так называют тех, кто наделен необыкновенными способностями и может ими управлять. Космобол обожают все, кроме Антона, самого обычного парня, который всего лишь мечтает найти работу, чтобы помочь семье. Но однажды у него обнаруживают сверхспособности, и принимают в сборную. Теперь он игрок в космобол. Антон ещё не подозревает о том, какая роль уготована ему судьбой в этом матче, и что финальная игра станет сражением за Землю.',
            afisha_picture: '/media/images/image_37.jpg',
            age_allowed: 6,
            duration: 115,
            mark_kp: 4.8,
            cinemas: [
                {
                    name: 'Эпицентр',
                    address: 'г. Калининград, ул. Проф. Баранова 30, 4 этаж',
                    phones: [
                        '+7-(4012)-300-028',
                        '+7-(4012)-300-003'
                    ],
                    cinema_icon: '/media/images/epicentr_label.jpg',
                    sessions: [
                        {
                            time: '23:30',
                            external_id: '54804277',
                            price: '290.00',
                            session_format: '2D'
                        }
                    ]
                },
                {
                    name: 'Синема Парк Европа',
                    address: 'г. Калининград, ул. Профессора Баранова, 40, ТРЦ «Европа», 3-й этаж',
                    phones: [
                        '8-800-700-01-11'
                    ],
                    cinema_icon: '/media/images/cinema_park_label.jpg',
                    sessions: []
                },
                {
                    name: 'Киносфера',
                    address: 'г.Калининград, ул.Челнокова, 11',
                    phones: [
                        '+7-(4012)-320-222',
                        '+7-(4012)-313-006',
                        '+7-(4012)-313-007'
                    ],
                    cinema_icon: '/media/images/Kinosphera_label.jpg',
                    sessions: []
                },
                {
                    name: 'КАРО 7 Плаза',
                    address: 'г. Калининград, Ленинский пр-т, д. 30. ТРЦ "Калининград Плаза"',
                    phones: [
                        '+7-(903)-626-00-85'
                    ],
                    cinema_icon: '/media/images/Karo_lable.png',
                    sessions: []
                }
            ]
        },
        {
            name: 'Куратор',
            info: 'В областном центре Кузнецкий в собственном кабинете убит мэр. Убийца – Димур Кавсадзе, подельник администрации Кузнецкого по коммерческой застройке. На город обрушивается шквал общественного беспокойства. Александр Данилин – негласный куратор, посредник между бизнесом и властями, включается в привычную работу по устранению неприятностей и нормализации жизни Кузнецкого. Причиной трагедии стала стройка, которая как опухоль разрастается вокруг Кузнецкого, являясь источником выгоды для властей и местных застройщиков. Она «пожирает» свободные земли, души людей и даже то, что, казалось, существует вне закона выгоды — семью. Стройку не могут остановить ни смерти людей, ни здравый смысл…',
            afisha_picture: '/media/images/image_40.jpg',
            age_allowed: 16,
            duration: 76,
            mark_kp: 0.0,
            cinemas: [
                {
                    name: 'Эпицентр',
                    address: 'г. Калининград, ул. Проф. Баранова 30, 4 этаж',
                    phones: [
                        '+7-(4012)-300-028',
                        '+7-(4012)-300-003'
                    ],
                    cinema_icon: '/media/images/epicentr_label.jpg',
                    sessions: []
                },
                {
                    name: 'Синема Парк Европа',
                    address: 'г. Калининград, ул. Профессора Баранова, 40, ТРЦ «Европа», 3-й этаж',
                    phones: [
                        '8-800-700-01-11'
                    ],
                    cinema_icon: '/media/images/cinema_park_label.jpg',
                    sessions: [
                        {
                            time: '20:55',
                            external_id: '54849127',
                            price: '190.00',
                            session_format: '2D'
                        }
                    ]
                },
                {
                    name: 'Киносфера',
                    address: 'г.Калининград, ул.Челнокова, 11',
                    phones: [
                        '+7-(4012)-320-222',
                        '+7-(4012)-313-006',
                        '+7-(4012)-313-007'
                    ],
                    cinema_icon: '/media/images/Kinosphera_label.jpg',
                    sessions: []
                },
                {
                    name: 'КАРО 7 Плаза',
                    address: 'г. Калининград, Ленинский пр-т, д. 30. ТРЦ "Калининград Плаза"',
                    phones: [
                        '+7-(903)-626-00-85'
                    ],
                    cinema_icon: '/media/images/Karo_lable.png',
                    sessions: []
                }
            ]
        },
        {
            name: 'Ассистентка',
            info: 'Мелани Прувост, десятилетняя дочь мясника, одаренная пианистка. Она готовится к экзаменам в Консерваторию. По всем признакам Мелани должна пройти, но расстроенная грубым обращением председателя жюри она проваливается. Через десять лет у Мелани, подрабатывающей на концертах у больших музыкантов (она переворачивает ноты), появляется шанс жестоко отомстить обидчице...',
            afisha_picture: '/media/images/image_41.jpg',
            age_allowed: 16,
            duration: 85,
            mark_kp: 6.7,
            cinemas: [
                {
                    name: 'Эпицентр',
                    address: 'г. Калининград, ул. Проф. Баранова 30, 4 этаж',
                    phones: [
                        '+7-(4012)-300-028',
                        '+7-(4012)-300-003'
                    ],
                    cinema_icon: '/media/images/epicentr_label.jpg',
                    sessions: []
                },
                {
                    name: 'Синема Парк Европа',
                    address: 'г. Калининград, ул. Профессора Баранова, 40, ТРЦ «Европа», 3-й этаж',
                    phones: [
                        '8-800-700-01-11'
                    ],
                    cinema_icon: '/media/images/cinema_park_label.jpg',
                    sessions: [
                        {
                            time: '22:25',
                            external_id: '54849157',
                            price: '150.00',
                            session_format: '2D'
                        }
                    ]
                },
                {
                    name: 'Киносфера',
                    address: 'г.Калининград, ул.Челнокова, 11',
                    phones: [
                        '+7-(4012)-320-222',
                        '+7-(4012)-313-006',
                        '+7-(4012)-313-007'
                    ],
                    cinema_icon: '/media/images/Kinosphera_label.jpg',
                    sessions: []
                },
                {
                    name: 'КАРО 7 Плаза',
                    address: 'г. Калининград, Ленинский пр-т, д. 30. ТРЦ "Калининград Плаза"',
                    phones: [
                        '+7-(903)-626-00-85'
                    ],
                    cinema_icon: '/media/images/Karo_lable.png',
                    sessions: []
                }
            ]
        },
        {
            name: 'Мулан',
            info: 'Изданный императором Китая указ о призыве на службу в армии одного мужчины из каждой семьи для защиты страны от северных захватчиков вдохновляет Мулан, старшую дочь почетного воина, занять в войсках место больного отца. Маскируясь под мужчину, девушка подвергается испытаниям на каждом шагу, проявляя свои внутреннюю силу и истинный потенциал. Мулан ждет эпичное путешествие, которое превратит её в доблестного воина, позволит заслужить уважение народа и стать гордостью отца.',
            afisha_picture: '/media/images/image_34.jpg',
            age_allowed: 12,
            duration: 115,
            mark_kp: 5.8,
            cinemas: [
                {
                    name: 'Эпицентр',
                    address: 'г. Калининград, ул. Проф. Баранова 30, 4 этаж',
                    phones: [
                        '+7-(4012)-300-028',
                        '+7-(4012)-300-003'
                    ],
                    cinema_icon: '/media/images/epicentr_label.jpg',
                    sessions: [
                        {
                            time: '20:40',
                            external_id: '54804296',
                            price: '290.00',
                            session_format: '2D'
                        },
                        {
                            time: '23:00',
                            external_id: '54804297',
                            price: '290.00',
                            session_format: '2D'
                        }
                    ]
                },
                {
                    name: 'Синема Парк Европа',
                    address: 'г. Калининград, ул. Профессора Баранова, 40, ТРЦ «Европа», 3-й этаж',
                    phones: [
                        '8-800-700-01-11'
                    ],
                    cinema_icon: '/media/images/cinema_park_label.jpg',
                    sessions: [
                        {
                            time: '20:40',
                            external_id: '54556146',
                            price: '330.00',
                            session_format: '2D'
                        },
                        {
                            time: '21:50',
                            external_id: '54849110',
                            price: '330.00',
                            session_format: '2D'
                        },
                        {
                            time: '23:10',
                            external_id: '54730445',
                            price: '330.00',
                            session_format: '2D'
                        }
                    ]
                },
                {
                    name: 'Киносфера',
                    address: 'г.Калининград, ул.Челнокова, 11',
                    phones: [
                        '+7-(4012)-320-222',
                        '+7-(4012)-313-006',
                        '+7-(4012)-313-007'
                    ],
                    cinema_icon: '/media/images/Kinosphera_label.jpg',
                    sessions: [
                        {
                            time: '22:15',
                            external_id: '54807395',
                            price: '260.00',
                            session_format: '2D'
                        }
                    ]
                },
                {
                    name: 'КАРО 7 Плаза',
                    address: 'г. Калининград, Ленинский пр-т, д. 30. ТРЦ "Калининград Плаза"',
                    phones: [
                        '+7-(903)-626-00-85'
                    ],
                    cinema_icon: '/media/images/Karo_lable.png',
                    sessions: [
                        {
                            time: '20:00',
                            external_id: '167517812',
                            price: '300.00',
                            session_format: '2D'
                        },
                        {
                            time: '21:30',
                            external_id: '169520833',
                            price: '340.00',
                            session_format: '3D'
                        },
                        {
                            time: '22:50',
                            external_id: '167517813',
                            price: '300.00',
                            session_format: '2D'
                        }
                    ]
                }
            ]
        },
        {
            name: 'Поезд в Пусан 2: Полуостров',
            info: 'Через четыре года после вспышки страшного вируса, распространение которого Южная Корея сдержать не смогла, то, что осталось от страны, находится в блокаде, а полчища зомби разгуливают по всему полуострову. Бывший военный Хан Джон-сок, в своё время сумевший эвакуироваться, в составе небольшого отряда отправляется из Гонконга в закрытую зону, чтобы отыскать грузовик с деньгами. Ему предстоит пробираться по жуткому миру, где помимо означенной угрозы опасность представляют и люди, устраивающие жестокие игры на выживание.',
            afisha_picture: '/media/images/image_42.jpg',
            age_allowed: 18,
            duration: 115,
            mark_kp: 5.5,
            cinemas: [
                {
                    name: 'Эпицентр',
                    address: 'г. Калининград, ул. Проф. Баранова 30, 4 этаж',
                    phones: [
                        '+7-(4012)-300-028',
                        '+7-(4012)-300-003'
                    ],
                    cinema_icon: '/media/images/epicentr_label.jpg',
                    sessions: []
                },
                {
                    name: 'Синема Парк Европа',
                    address: 'г. Калининград, ул. Профессора Баранова, 40, ТРЦ «Европа», 3-й этаж',
                    phones: [
                        '8-800-700-01-11'
                    ],
                    cinema_icon: '/media/images/cinema_park_label.jpg',
                    sessions: [
                        {
                            time: '22:50',
                            external_id: '54849129',
                            price: '190.00',
                            session_format: '2D'
                        }
                    ]
                },
                {
                    name: 'Киносфера',
                    address: 'г.Калининград, ул.Челнокова, 11',
                    phones: [
                        '+7-(4012)-320-222',
                        '+7-(4012)-313-006',
                        '+7-(4012)-313-007'
                    ],
                    cinema_icon: '/media/images/Kinosphera_label.jpg',
                    sessions: []
                },
                {
                    name: 'КАРО 7 Плаза',
                    address: 'г. Калининград, Ленинский пр-т, д. 30. ТРЦ "Калининград Плаза"',
                    phones: [
                        '+7-(903)-626-00-85'
                    ],
                    cinema_icon: '/media/images/Karo_lable.png',
                    sessions: []
                }
            ]
        }
    ],
    pickedCinema: 'all'

})
export const mutations = {
    setFilms(state, films) {
        state.films = films
    },
    setpickedCinema(state, cinema) {
        state.pickedCinema = cinema
    }
}
export const actions = {
    async fetch({ commit }, day) {
        try {
            const films = await this.$axios.$get('v1/sessions/' + day + '/', { headers: { 'Access-Control-Allow-Origin': '*' } })
            commit('setFilms', films)
        } catch (e) {
            console.error(e)
        }
    },
    pickCinema({ commit }, cinema) {
        commit('pickedCinema', cinema)
    }

}
export const getters = {
    films: s => s.films,
    pickedCinema: s => s.pickedCinema
}
