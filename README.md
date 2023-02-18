# ipp5-token-audience

~~~~~ sh
npm install e53e04ac/ipp5-token-audience
~~~~~

~~~~~ mjs
import { Ipp5TokenAudience } from 'e53e04ac/ipp5-token-audience';
~~~~~

~~~~~ mermaid
graph RL;
  A(["package.json"]);
  subgraph "dependencies";
    B_0(["e53e04ac/base"]);
    B_1(["e53e04ac/hold"]);
    B_2(["joi"]);
    B_3(["jsonwebtoken"]);
  end;
  subgraph "devDependencies";
    B_4(["@types/jsonwebtoken"]);
    B_5(["@types/node"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  A ----> B_5;
  click B_0 "https://github.com/e53e04ac/base/tree/ddd2c718686c0629e497f4fa610d1979aac40c8a";
  click B_1 "https://github.com/e53e04ac/hold/tree/49707680ccdf4c5673f64ff0bab30f408269b328";
  click B_2 "https://www.npmjs.org/package/joi/v/17.7.1";
  click B_3 "https://www.npmjs.org/package/jsonwebtoken/v/9.0.0";
  click B_4 "https://www.npmjs.org/package/@types/jsonwebtoken/v/9.0.1";
  click B_5 "https://www.npmjs.org/package/@types/node/v/18.14.0";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-token-audience";
    E_0(["Ipp5TokenAudience"]);
  end;
  M(["index.mjs"])
  subgraph "joi";
    I_0_0(["default"]);
  end;
  subgraph "jsonwebtoken";
    I_1_0(["default"]);
  end;
  subgraph "base";
    I_2_0(["Base"]);
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

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-token-audience";
    E_0(["namespace Ipp5TokenAudience"]);
    E_1(["type Ipp5TokenAudience"]);
    E_2(["const Ipp5TokenAudience"]);
  end;
  M(["index.d.ts"])
  subgraph "joi";
    I_0_0(["default"]);
  end;
  subgraph "base";
    I_1_0(["Base"]);
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
