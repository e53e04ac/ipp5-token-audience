/*!
    @e53e04ac/ipp5-token-audience/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { default as Joi } from 'joi';

import { EventEmitter } from 'event-emitter';
import { Get } from 'hold';
import { ValueOrGet } from 'hold';

export declare namespace Ipp5TokenAudience {

    type TokenPayload = {
        readonly iss: string;
        readonly sub?: undefined | string;
        readonly aud: string;
        readonly exp: number;
        readonly nbf: number;
        readonly iat: number;
        readonly jti: string;
        readonly clientId: string;
    };

    type Options = {
        readonly idpTokenUrn: ValueOrGet<string>;
        readonly apiUrn: ValueOrGet<string>;
        readonly idpTokenPublicKey: ValueOrGet<string>;
    };

    type EventSpecs = Record<never, never>;

    type _Self = {
        readonly options: Get<Options>;
        readonly _options: Get<unknown>;
        readonly base64urlSchema: Get<Joi.StringSchema>;
        readonly jwtSchema: Get<Joi.StringSchema>;
        readonly urnSchema: Get<Joi.StringSchema>;
        readonly clientAgentIdSchema: Get<Joi.StringSchema>;
        readonly clientAgentTimeSchema: Get<Joi.NumberSchema>;
        readonly clientAgentNonceSchema: Get<Joi.StringSchema>;
        readonly clientIdSchema: Get<Joi.StringSchema>;
        readonly accessParamsSchema: Get<Joi.ObjectSchema<{
            readonly clientAgentId: string;
            readonly clientAgentTime: number;
            readonly clientAgentNonce: string;
            readonly token: string;
        }>>;
        readonly tryPromise: {
            <T>(promise: Promise<T>): Promise<{
                readonly error: null | Error;
                readonly value: null | T;
            }>;
        };
        readonly arrayBufferFromBase64url: {
            (base64url: string): ArrayBuffer;
        };
        readonly base64urlFromArrayBuffer: {
            (arrayBuffer: ArrayBuffer): string;
        };
        readonly parseToken: {
            (string: string): Promise<TokenPayload>;
        };
    };

    type Self = EventEmitter<EventSpecs> & {
        readonly _Ipp5TokenAudience: Get<_Self>;
        readonly verify: {
            (params: {
                readonly clientAgentId: unknown;
                readonly clientAgentTime: unknown;
                readonly clientAgentNonce: unknown;
                readonly token: unknown;
            }): Promise<{
                readonly error: null | Error;
                readonly clientId: null | string;
            }>;
        };
    };

    type Constructor = {
        (options: Options): Self;
    };

    type Companion = Record<never, never>;

    type ConstructorWithCompanion = Constructor & Companion;

}

export declare type Ipp5TokenAudience = Ipp5TokenAudience.Self;

export declare const Ipp5TokenAudience: Ipp5TokenAudience.ConstructorWithCompanion;
