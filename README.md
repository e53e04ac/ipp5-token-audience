# ipp5-token-audience

~~~~~ sh
npm install e53e04ac/ipp5-token-audience
~~~~~

~~~~~ mjs
import { Ipp5TokenAudience } from 'e53e04ac/ipp5-token-audience';
~~~~~

~~~~~ mermaid
graph LR;
  A(["ipp5-token-audience"]);
  B0(["e53e04ac/base"]);
  B1(["e53e04ac/hold"]);
  B2(["joi"]);
  B3(["jsonwebtoken"]);
  C0(["@types/jsonwebtoken"]);
  C1(["@types/node"]);
  click B0 href "https://github.com/e53e04ac/base";
  click B1 href "https://github.com/e53e04ac/hold";
  subgraph "e53e04ac/ipp5-token-audience";
    A;
  end;
  subgraph "dependencies";
    B0 --import--> A;
    B1 --import--> A;
    B2 --import--> A;
    B3 --import--> A;
  end;
  subgraph "devDependencies";
    C0 --import--> A;
    C1 --import--> A;
  end;
~~~~~
