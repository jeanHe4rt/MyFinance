

export const  NewObjectID = (): string  => {
  let date = new Date();
  var decode = Buffer.from(date.toISOString(), 'utf8').toString('base64');
  return decode;
}