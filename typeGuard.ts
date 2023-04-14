type Response =
  | { status: 200; data?: string }
  | { status: 300; to?: string }
  | { status: 400; error?: string };

const responseArr: Response[] = [
  { status: 200, data: "Mission Successfull" },
  { status: 300, to: "Something went wrong" },
  { status: 400, error: "Mission Failed" },
];

const response: Response = responseArr[
  Math.floor(Math.random() * 3)
] as Response;

switch (response.status) {
  case 200:
    console.info(response.data);
    break;
  case 300:
    console.warn(response.to);
    break;
  case 400:
    console.error(response.error);
}

export {};
