#include "vntlib.h"

KEY address owner;
KEY uint32 last_completed_migration;
constructor Migrations()
{
  owner = GetSender();
}

void onlyOwner()
{
  Require(Equal(owner, GetSender()), "is not owner");
}

MUTABLE
void setCompleted(uint32 completed)
{
  onlyOwner();
  last_completed_migration = completed;
}

UNMUTABLE
uint32 get_last_completed_migration()
{
  return last_completed_migration;
}
