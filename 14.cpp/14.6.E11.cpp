#include <iostream>

int main() {
    int limit;
    std::cin >> limit;

    std::cout << "---\n";
    for (int row = 1; row <= limit; ++row) {
        for (int column = 1; column <= row; ++column) {
            if (column > 1) {
                std::cout << ',';
            }
            std::cout << row;
        }
        std::cout << '\n';
    }
}
