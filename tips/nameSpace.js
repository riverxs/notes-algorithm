// nameSpace.js
function nameSpace(namespace, package) {
	// pseudo-code

	// get [a, b, c, d] or reduce package
	// if a in namespace
	// 	then find namespace.a
	// else add "a" property in namespace object
	// 	then recursively operate the "a" object
	
	function helper(restNamespace, restPackage){
		let prop = package.slice(0, 1)
		let restPackage = package.slice(2)	
		let restNamespace = namespace.prop
		if(restPackage === ''){
			return namespace
		}else{
			if(prop in namespace){
				return nameSpace(restNamespace, restPackage)
			}else{
				restNamespace = {}
				return nameSpace(restNamespace, restPackage)
			}
		}
	}
	
}

namespace({a: {test: 1, b: 2}}, 'a.b.c.d') // {a: {test: 1, b: {c: {d: {}}}}}
