# ipp5-token-audience

~~~~~ sh
npm install e53e04ac/ipp5-token-audience
~~~~~

~~~~~ mjs
import { Ipp5TokenAudience } from 'e53e04ac/ipp5-token-audience';
~~~~~

~~~~~ mermaid
graph RL;
  A["package.json\npackage-lock.json"];
  subgraph "dependencies";
    B_0(["event-emitter"]);
    B_1(["hold"]);
    B_2(["joi"]);
    B_3(["jsonwebtoken"]);
  end;
  subgraph "devDependencies";
    B_4(["@types/jsonwebtoken"]);
    B_5(["@types/node"]);
  end;
  subgraph "github";
    C_0(["e53e04ac/event-emitter\naea7d828d486572514f193752191206e0cbeeaa5"]);
    C_1(["e53e04ac/hold\n593585d63bb24dc044f13a88375b53f9fa565229"]);
  end;
  subgraph "npmjs";
    C_2(["joi\n17.8.3"]);
    C_3(["jsonwebtoken\n9.0.0"]);
    C_4(["@types/jsonwebtoken\n9.0.1"]);
    C_5(["@types/node\n18.14.1"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  A ----> B_5;
  B_0 ----> C_0;
  B_1 ----> C_1;
  B_2 ----> C_2;
  B_3 ----> C_3;
  B_4 ----> C_4;
  B_5 ----> C_5;
  click C_0 "https://github.com/e53e04ac/event-emitter/tree/aea7d828d486572514f193752191206e0cbeeaa5";
  click C_1 "https://github.com/e53e04ac/hold/tree/593585d63bb24dc044f13a88375b53f9fa565229";
  click C_2 "https://www.npmjs.com/package/joi/v/17.8.3";
  click C_3 "https://www.npmjs.com/package/jsonwebtoken/v/9.0.0";
  click C_4 "https://www.npmjs.com/package/@types/jsonwebtoken/v/9.0.1";
  click C_5 "https://www.npmjs.com/package/@types/node/v/18.14.1";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-token-audience";
    E_0(["namespace Ipp5TokenAudience"]);
    E_1(["type Ipp5TokenAudience"]);
    E_2(["const Ipp5TokenAudience"]);
  end;
  M["index.d.ts"]
  subgraph "joi";
    I_0_0(["default"]);
  end;
  subgraph "event-emitter";
    I_1_0(["EventEmitter"]);
  end;
  subgraph "hold";
    I_2_0(["Get"]);
    I_2_1(["ValueOrGet"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_2_1;
  E_0 ----> M;
  E_1 ----> M;
  E_2 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-token-audience";
    E_0(["Ipp5TokenAudience"]);
  end;
  M["index.mjs"]
  subgraph "joi";
    I_0_0(["default"]);
  end;
  subgraph "jsonwebtoken";
    I_1_0(["default"]);
  end;
  subgraph "event-emitter";
    I_2_0(["EventEmitter"]);
  end;
  subgraph "hold";
    I_3_0(["hold"]);
    I_3_1(["unwrap"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_3_0;
  M ----> I_3_1;
  E_0 ----> M;
~~~~~
