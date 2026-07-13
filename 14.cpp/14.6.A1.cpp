#include <algorithm>
#include <array>
#include <iostream>

int main() {
    std::array<int, 3> values;
    std::cin >> values[0] >> values[1] >> values[2];
    std::sort(values.begin(), values.end());

    std::cout << "---\n" << values[0] << ' ' << values[1] << ' ' << values[2] << '\n';
}
