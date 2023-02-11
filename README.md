# ipp5-token-audience

~~~~~ sh
npm install e53e04ac/ipp5-token-audience
~~~~~

~~~~~ mjs
import { Ipp5TokenAudience } from 'e53e04ac/ipp5-token-audience';
~~~~~

~~~~~ mermaid
graph RL;
  A(["e53e04ac/ipp5-token-audience"]);
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
  A --reference--> B_0;
  A --reference--> B_1;
  A --reference--> B_2;
  A --reference--> B_3;
  A --reference--> B_4;
  A --reference--> B_5;
  click B_0 "https://github.com/e53e04ac/base/tree/b4e091dbfeba0ea30c870ac7ac7877582e3fd4f0";
  click B_1 "https://github.com/e53e04ac/hold/tree/2143f5f52192ae4156ea0af80d41c87c55355e9c";
  click B_2 "https://www.npmjs.org/package/joi/v/17.7.1";
  click B_3 "https://www.npmjs.org/package/jsonwebtoken/v/9.0.0";
  click B_4 "https://www.npmjs.org/package/@types/jsonwebtoken/v/9.0.1";
  click B_5 "https://www.npmjs.org/package/@types/node/v/18.13.0";
~~~~~

~~~~~ mermaid
graph LR;
  subgraph "e53e04ac/ipp5-token-audience"
    C0("index.mjs");
    C1("index.d.ts");
  end;
  subgraph "joi"
    D0(["default"]);
  end;
  subgraph "jsonwebtoken"
    D1(["default"]);
  end;
  subgraph "base"
    D2(["Base"]);
  end;
  subgraph "hold"
    D3(["hold"]);
    D4(["unwrap"]);
    D5(["Get"]);
    D6(["ValueOrGet"]);
  end;
  D0 --import--> C0;
  D1 --import--> C0;
  D2 --import--> C0;
  D3 --import--> C0;
  D4 --import--> C0;
  D0 --import--> C1;
  D2 --import--> C1;
  D5 --import--> C1;
  D6 --import--> C1;
~~~~~
