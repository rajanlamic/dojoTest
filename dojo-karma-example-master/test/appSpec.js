define(['demo/app', 'demo/sainsburys'], function(app, sainsburys) {

  describe('just checking', function() {

    it('works for app', function() {
      console.log('sainsburys', sainsburys);
      var el = dojo.query('body')[0];

      app.render(el);

      expect(el.innerHTML).toEqual('Dojo Toolkit up and running');
    });

  });

});