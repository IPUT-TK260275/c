#include <iostream>

int main() {
    int a;
    int b;
    int c;
    std::cin >> a >> b >> c;

    std::cout << std::boolalpha << "---\n" << (a != b && b != c && a != c) << '\n';
}
