import {defineMessages} from 'react-intl';
import sharedMessages from '../shared-messages';

let messages = defineMessages({
    variable: {
        defaultMessage: 'my variable',
        description: 'Name for the default variable',
        id: 'gui.defaultProject.variable'
    }
});

messages = {...messages, ...sharedMessages};

// use the default message if a translation function is not passed
const defaultTranslator = msgObj => msgObj.defaultMessage;

/**
 * Generate a localized version of the default project
 * @param {function} translateFunction a function to use for translating the default names
 * @return {object} the project data json for the default project
 */
const projectData = translateFunction => {
    const translator = translateFunction || defaultTranslator;
    return ({
        targets: [
            {
                isStage: true,
                name: 'Stage',
                variables: {
                    '`jEk@4|i[#Fk?(8x)AV.-my variable': [
                        'TFGS',
                        0
                    ]
                },
                lists: {},
                broadcasts: {},
                blocks: {},
                currentCostume: 0,
                costumes: [
                    {
                        assetId: 'cd21514d0531fdffb22204e0ec5ed84a',
                        name: 'Background',
                        md5ext: 'cd21514d0531fdffb22204e0ec5ed84a.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 240,
                        rotationCenterY: 180
                    }
                ],
                sounds: [],
                volume: 100
            },
            {
                isStage: false,
                name: 'Tera',
                variables: {},
                lists: {},
                broadcasts: {},
                blocks: {},
                comments: {},
                currentCostume: 0,
                costumes: [
                    {
                        assetId: 'bcf454acf82e4504149f7ffe07081dbc',
                        name: 'Tera-a',
                        bitmapResolution: 1,
                        md5ext: 'bcf454acf82e4504149f7ffe07081dbc.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 48,
                        rotationCenterY: 50
                    },
                    {
                        assetId: '0fb9be3e8397c983338cb71dc84d0b25',
                        name: 'Tera-b',
                        bitmapResolution: 1,
                        md5ext: '0fb9be3e8397c983338cb71dc84d0b25.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 46,
                        rotationCenterY: 53
                    },
                    {
                        assetId: '2daca5f43efc2d29fb089879448142e9',
                        name: 'Tera-c',
                        bitmapResolution: 1,
                        md5ext: '2daca5f43efc2d29fb089879448142e9.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 48,
                        rotationCenterY: 50
                    },
                    {
                        assetId: '5456a723f3b35eaa946b974a59888793',
                        name: 'Tera-d',
                        bitmapResolution: 1,
                        md5ext: '5456a723f3b35eaa946b974a59888793.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 46,
                        rotationCenterY: 53
                    }
                ],
                sounds: [],
                volume: 100,
                visible: true,
                x: 0,
                y: 0,
                size: 100,
                direction: 90,
                draggable: false,
                rotationStyle: 'all around'
            }
        ],
        meta: {
            semver: '3.0.0',
            vm: '0.1.0',
            agent: ''
        }
    });
};


export default projectData;
