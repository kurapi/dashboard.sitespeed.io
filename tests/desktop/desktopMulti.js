module.exports = async function(context, commands) {
  commands.meta.setTitle('Test visiting multiple pages');
  commands.meta.setDescription(
    'First hit the Main_Page with an empty browser cache and then visit Barack, followed buy the Democratic Party'
  );
  await commands.measure.start('https://new.hnair.com/hainanair/ibe/common/flightSearch.do');
};
