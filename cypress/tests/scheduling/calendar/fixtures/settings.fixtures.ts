import {faker} from '@faker-js/faker';
import {CONSTANTS} from './../../../../helper'


interface resourceSettingsInterface {
    eventResourceType: string;
    resourceId: number;
    hexColorCode: string;
};
interface otherColorsInterface {
    [key: string]: string;
};

 interface clinicSettingInterface {
    id: number;
    resourceSettings: resourceSettingsInterface[];
    otherColors: otherColorsInterface;
};

const validSettingsPayload: clinicSettingInterface = {
    id: 0,
    resourceSettings: [{
        eventResourceType: "Type A",
        resourceId: 1,
        hexColorCode: "#FF0000"
    },
    {
        eventResourceType: "Type B",
        resourceId: 2,
        hexColorCode: "#00FF00"
    }],
    otherColors: {
        additionalProp1: "Value 1",
        additionalProp2: "Value 2"
  }
};

const validUserSettingsPayload = {
    rememberView: true,
    id:0
};

export {
    validSettingsPayload,
    validUserSettingsPayload,
    resourceSettingsInterface,
    otherColorsInterface,
    clinicSettingInterface
}