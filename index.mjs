/*!
    @e53e04ac/ipp5-token-audience/index.mjs
    Copyright (C) @e53e04ac
    MIT License
*/

import { default as Joi } from 'joi';
import { default as jsonwebtoken } from 'jsonwebtoken';

import { Base } from 'base';
import { hold } from 'hold';
import { unwrap } from 'hold';

const { verify: jsonwebtokenVerify } = jsonwebtoken;

/** @type {import('.').Ipp5TokenAudience.Constructor} */
const constructor = ((options) => {

    const _options = ({
        idpTokenUrn: hold(() => {
            return unwrap(options.idpTokenUrn);
        }),
        apiUrn: hold(() => {
            return unwrap(options.apiUrn);
        }),
        idpTokenPublicKey: hold(() => {
            return unwrap(options.idpTokenPublicKey);
        }),
    });

    /** @type {import('.').Ipp5TokenAudience._Self} */
    const _self = ({
        options: (() => {
            return options;
        }),
        _options: (() => {
            return _options;
        }),
        base64urlSchema: hold(() => {
            return Joi.string().regex(/^[0-9A-Za-z\-_]*$/);
        }),
        jwtSchema: hold(() => {
            return Joi.string().regex(/^[0-9A-Za-z\-_]+\.[0-9A-Za-z\-_]+\.[0-9A-Za-z\-_]+$/);
        }),
        urnSchema: hold(() => {
            return Joi.string().regex(/^urn(:[0-9A-Za-z\-_]+)*$/);
        }),
        clientAgentIdSchema: hold(() => {
            return _self.base64urlSchema().max(100);
        }),
        clientAgentTimeSchema: hold(() => {
            return Joi.number().integer().min(0);
        }),
        clientAgentNonceSchema: hold(() => {
            return _self.base64urlSchema().max(100);
        }),
        clientIdSchema: hold(() => {
            return _self.urnSchema().max(100);
        }),
        accessParamsSchema: hold(() => {
            return Joi.object().unknown(false).keys({
                clientAgentId: _self.clientAgentIdSchema().required(),
                clientAgentTime: _self.clientAgentTimeSchema().required(),
                clientAgentNonce: _self.clientAgentNonceSchema().required(),
                token: _self.jwtSchema().max(1000).required(),
            });
        }),
        tryPromise: (async (promise) => {
            return await promise.then((value) => {
                return { error: null, value };
            }, (error) => {
                return { error, value: null };
            });
        }),
        arrayBufferFromBase64url: ((base64url) => {
            return new Uint8Array(Buffer.from(base64url, 'base64url')).buffer;
        }),
        base64urlFromArrayBuffer: ((arrayBuffer) => {
            return Buffer.from(arrayBuffer).toString('base64url');
        }),
        parseToken: (async (string) => {
            return await new Promise((resolve, reject) => {
                jsonwebtokenVerify(string, _options.idpTokenPublicKey(), {
                    algorithms: ['ES384'],
                    issuer: _options.idpTokenUrn(),
                    audience: _options.apiUrn(),
                    complete: true,
                }, (error, decoded) => {
                    if (error != null || decoded == null) {
                        reject(error);
                        return;
                    }
                    /** @type {any} */
                    const payload = decoded.payload;
                    resolve(payload);
                });
            });
        }),
    });

    /** @type {import('.').Ipp5TokenAudience.Self} */
    const self = ({
        ...Base({}),
        _Ipp5TokenAudience: (() => {
            return _self;
        }),
        verify: (async (params) => {
            const validationResult = _self.accessParamsSchema().validate({
                clientAgentId: params.clientAgentId,
                clientAgentTime: params.clientAgentTime,
                clientAgentNonce: params.clientAgentNonce,
                token: params.token,
            });
            if (validationResult.error != null || validationResult.value == null) {
                return { error: validationResult.error, clientId: null };
            }
            const parseResult = await _self.tryPromise(_self.parseToken(validationResult.value.token));
            if (parseResult.error != null || parseResult.value == null) {
                return { error: parseResult.error, clientId: null };
            }
            const challengeTokenPayload = parseResult.value;
            const clientId = challengeTokenPayload.clientId;
            return { error: null, clientId };
        }),
    });

    return self;

});

/** @type {import('.').Ipp5TokenAudience.Companion} */
const companion = ({});

/** @type {import('.').Ipp5TokenAudience.ConstructorWithCompanion} */
const constructorWithCompanion = Object.assign(constructor, companion);

export { constructorWithCompanion as Ipp5TokenAudience };
