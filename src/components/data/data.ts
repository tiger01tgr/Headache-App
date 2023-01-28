import { MIN_IN_MILLISECOND } from '@/constants/time';
import generateUUID from '@/functions/randomUUID';
import { Session, Event, Pain, UserData } from '../../hooks/types'

const date0 = new Date();
date0.setTime(date0.getTime() + (5 * MIN_IN_MILLISECOND))

const date1 = new Date();
date1.setTime(date0.getTime() + (10 * MIN_IN_MILLISECOND))
const date2 = new Date();
date2.setTime(date0.getTime() + (15 * MIN_IN_MILLISECOND))
const date3 = new Date();
date3.setTime(date0.getTime() + (20 * MIN_IN_MILLISECOND))
const date4 = new Date();
date4.setTime(date0.getTime() + (25 * MIN_IN_MILLISECOND))

const date5 = new Date();
date5.setTime(date0.getTime() + (30 * MIN_IN_MILLISECOND))


const fakeTimes = [
    date0, date1, date2, date3, date4, date5
]


export var fakeData: UserData = {
    id: "asdfasdfasdfa",
    email: "tiger01tgr@gmail.com",
    username: 'tiger01tgr',
    sex: "Male",
    activeSession: null,
    sessions: [{
        id: generateUUID(),
        start: new Date,
        end: new Date,
        events: [{
            description: "Ate an apple",
            time: new Date
        }],
        pain: [
            {
                threshold: 8,
                time: fakeTimes[0],
                location: ''
            },
            {
                threshold: 7,
                time: fakeTimes[1],
                location: ''
            },
            {
                threshold: 2,
                time: fakeTimes[2],
                location: ''
            },
            {
                threshold: 3,
                time: fakeTimes[3],
                location: ''
            },
            {
                threshold: 2,
                time: fakeTimes[4],
                location: ''
            }
        ]
        },
        {
            id: generateUUID(),
            start: new Date,
            end: new Date,
            events: [{
                description: "OMG",
                time: new Date
            }],
            pain: [
                {
                    threshold: 3,
                    time: fakeTimes[3],
                    location: ''
                },
                {
                    threshold: 2,
                    time: fakeTimes[4],
                    location: ''
                }
            ]
            },

    ]
}

