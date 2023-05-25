const httpStatus = 200;

if (httpStatus === 200 || httpStatus === 201 || httpStatus === 204) {
}

switch (httpStatus) {
  case 200:
  case 201:
  case 204:
    break;
}

const successCodes = [200, 201, 204];
if (successCodes.includes(httpStatus)) {
}
