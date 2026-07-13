#include <iostream>

int main() {
    int limit;
    std::cin >> limit;

    std::cout << "---\n";
    for (int value = 1; value <= limit; value += 2) {
        std::cout << value << '\n';
    }
}
