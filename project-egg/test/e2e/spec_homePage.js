// spec.js
describe('ford_pretty homePage', function() {
  global.dv = browser.driver;

  beforeEach(function() {
    return browser.ignoreSynchronization = true;
  });

  beforeEach(function() {
    dv.get('http://localhost:8085/');
  });

  it('should have a nice title', function() {
    expect(dv.getTitle()).toBe('福特福睿斯官方体验中心');
  });

  describe('city selection', function() {
    // 29个城市 + 1个“请选择”
    it('should have 30 options', function() {
      var citySelect = element(by.css('[name=city]'));
      var cityOptions = citySelect.all(by.tagName('option'));
      expect(cityOptions.count()).toBe(30);
    });
  });

  // 车型选择
  describe('car selection', function() {
    var carSelect;
    beforeEach(function() {
      carSelect = element(by.css('[name=car]'));
    });
    // 8种车型 + “请选择”
    it('should have 9 options', function() {
      var carOptions = carSelect.all(by.tagName('option'));
      expect(carOptions.count()).toBe(9);
    });

    // 默认选择“请选择”
    it('should select the "请选择" at the start', function() {
      var selected = carSelect.element(by.css('[selected]'));
      expect(selected.getText()).toEqual('请选择');
    });
  });

  describe('submitting', function() {
    var submitBtn;

    beforeEach(function() {
      submitBtn = element(by.css('.submit-btn'));
    });

    it('should alert when the name input is empty', function() {
      submitBtn.click();

      var al = browser.switchTo().alert();
      expect(al.getText()).toEqual('请填写名称');
    });

    //it('should alert when the car selection has no selected option', function() {
    //
    //})
  })
});