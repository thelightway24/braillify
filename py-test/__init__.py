import pytest
import braillify


@pytest.mark.parametrize(
    "input, expected",
    [
        ("안녕하세요", "⠣⠒⠉⠻⠚⠠⠝⠬"),
    ],
)
def test_encode(input, expected):
    assert braillify.translate_to_unicode(input) == expected
