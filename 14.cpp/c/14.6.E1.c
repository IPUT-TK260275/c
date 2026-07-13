#include <stdio.h>
#include <string.h>

int main(void) {
    char first_name[256];
    char second_name[256];
    int first_price;
    int first_count;
    int second_price;
    int second_count;

    fgets(first_name, sizeof(first_name), stdin);
    first_name[strcspn(first_name, "\r\n")] = '\0';
    scanf("%d%d", &first_price, &first_count);

    int character;
    while ((character = getchar()) != '\n' && character != EOF) {
    }

    fgets(second_name, sizeof(second_name), stdin);
    second_name[strcspn(second_name, "\r\n")] = '\0';
    scanf("%d%d", &second_price, &second_count);

    const int first_total = first_price * first_count;
    const int second_total = second_price * second_count;
    printf("---\n%s: %d yen\n%s: %d yen\n===\nTotal: %d yen\n",
           first_name,
           first_total,
           second_name,
           second_total,
           first_total + second_total);
    return 0;
}
