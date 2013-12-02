
build: components index.js
	@component build --dev -o .

components: component.json
	@component install --dev

clean:
	rm -fr build.js build components template.js

.PHONY: clean
