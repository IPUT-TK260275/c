#include <iostream>

int main() {
    int minutes;
    std::cin >> minutes;

    std::cout << "---\n" << minutes / 60 << '\n' << minutes % 60 << '\n';
}
