export interface NotificationChannels {
    via: string[];

    getChannels(): string[];
}

export interface NotificationViaEmail {
    viaEmail(): boolean;
}

export interface NotificationViaSms {
    viaSms(): boolean;
}

export interface NotificationViaPush {
    viaPush(): boolean;
}