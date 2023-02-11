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
  click B_0 "https://github.com/e53e04ac/base/tree/2dc903faf7859d755dd52f7fde706be5170b9a6f";
  click B_1 "https://github.com/e53e04ac/hold/tree/285d028e225a7e75747417c3ed6b1ca0d5f52f6a";
  click B_2 "https://www.npmjs.org/package/joi/v/17.7.1";
  click B_3 "https://www.npmjs.org/package/jsonwebtoken/v/9.0.0";
  click B_4 "https://www.npmjs.org/package/@types/jsonwebtoken/v/9.0.1";
  click B_5 "https://www.npmjs.org/package/@types/node/v/18.13.0";
~~~~~

~~~~~ mermaid
graph LR;
  A(["index.mjs"])
  subgraph "joi";
    B_0_0(["default"]);
  end;
  subgraph "jsonwebtoken";
    B_1_0(["default"]);
  end;
  subgraph "base";
    B_2_0(["Base"]);
  end;
  subgraph "hold";
    B_3_0(["hold"]);
    B_3_1(["unwrap"]);
  end;
  B_0_0 ----> A;
  B_1_0 ----> A;
  B_2_0 ----> A;
  B_3_0 ----> A;
  B_3_1 ----> A;
~~~~~

~~~~~ mermaid
graph LR;
  A(["index.d.ts"])
  subgraph "joi";
    B_0_0(["default"]);
  end;
  subgraph "base";
    B_1_0(["Base"]);
  end;
  subgraph "hold";
    B_2_0(["Get"]);
    B_2_1(["ValueOrGet"]);
  end;
  B_0_0 ----> A;
  B_1_0 ----> A;
  B_2_0 ----> A;
  B_2_1 ----> A;
~~~~~
