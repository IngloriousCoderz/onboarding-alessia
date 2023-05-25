async function getJSONs() {
  try {
    const response1 = await $.getJSON(url1);
    const response2 = await $.getJSON(url2);
    const response3 = await $.getJSON(url3);
    return response3;
  } catch (error) {
  } finally {
  }
}

getJSONs().then((response3) => {});

async function dealWithResponse3() {
  const response3 = await getJSONs();
}

async function getJSONsInParallel() {
  await 42;
  const [response1, response2] = await Promise.all([
    $.getJSON(url1),
    $.getJSON(url2),
  ]);
}
