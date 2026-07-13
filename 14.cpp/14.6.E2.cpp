#include <iostream>

int main() {
    double total = 0;
    for (int i = 0; i < 5; ++i) {
        double value;
        std::cin >> value;
        total += value;
    }

    std::cout << "---\n" << total / 5 << '\n';
}
