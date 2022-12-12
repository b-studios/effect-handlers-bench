var $heap$data = {};
var $heap$pointer = 0;

function fresh$impl(init) {
    const ref = $heap$pointer++;
    $heap$data[ref] = init;
    return ref
}

function put$impl(ref, value) {
    $heap$data[ref] = value;
    return null
}

function get$impl(ref) {
    return $heap$data[ref];
}