export interface CustomNotification {
    message: string;
    type: CustomNotificationType;
    dismissible: boolean;
}

export enum CustomNotificationType {    
    danger,
    info,
    success,
    warning,
}